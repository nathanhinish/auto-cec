'use strict'
const debug = require('debug')('cec:CECClient')
const camelCase = require('lodash/camelCase')
const invert = require('lodash/invert')

const NodeCec = require('node-cec').NodeCec
const CEC = require('node-cec').CEC

const generateSourceTarget = require('./util/generateSourceTarget')

const Commands = require('require-dir')('./commands')
const Handlers = require('require-dir')('./handlers')

const LogicalAddress = CEC.LogicalAddress
const Opcode = CEC.Opcode
const InverseOpcode = invert(Opcode)

const HEX_BASE = 0x10

function CECClient(name) {
  let self = this

  for (let key in Commands) {
    this[key] = Commands[key].bind(this)
  }

  this.cec = new NodeCec(name || 'boom')

  this.cec.processPacket = function (packet) {
    debug('  -->', JSON.stringify(packet))

    if (typeof packet.source === 'string') {
      packet.source = parseInt(packet.source, HEX_BASE)
    }

    if (typeof packet.target === 'string') {
      packet.target = parseInt(packet.target, HEX_BASE)
    }

    self.emit('packet', packet)

    let codeKey = InverseOpcode[packet.opcode]
    let handlerName = camelCase(codeKey)
    let handler = Handlers[handlerName]

    if (typeof handler === 'function') {
      handler.bind(self)(packet)
      return true
    }

    this.emit('packet', packet)
    return false
  }

  this.cec.on('data', (data) => {
    debug('  ==>', data)
  })
}

require('util').inherits(CECClient, require('events').EventEmitter)

CECClient.prototype.LOGICAL_ADDRESS = LogicalAddress.RECORDINGDEVICE1
CECClient.prototype.SHIFTER = 0x10
CECClient.prototype.PROC_CMD = 'cec-client'
CECClient.prototype.PROC_ARGS = ['-m', '-d', '8', '-b', CECClient.prototype.LOGICAL_ADDRESS, '-t', 'r']

CECClient.prototype.start = function start(done) {
  let args = [this.PROC_CMD].concat(this.PROC_ARGS)
  this.cec.once('ready', () => {
    if (done) {
      done()
    }
  })
  this.cec.start.apply(this.cec, args)
}

CECClient.prototype.stop = function stop(done) {
  let received = 0
  let self = this

  function onStop() {
    debug('onStop called')
    // there is a bug in the NodeCec
    // class that causes us to have to
    // wait for the second call
    received = received + 1
    if (received > 1) {
      self.removeListener('stop', onStop)
      if (done) {
        done(null, self)
      }
    }
  }

  this.cec.on('stop', onStop)
  this.cec.stop()
}

CECClient.prototype.sendCommand = function sendCommand(target, args) {
  let cec = this.cec
  let sd = generateSourceTarget(this.LOGICAL_ADDRESS, target || LogicalAddress.BROADCAST)
  if (args && args.length) {
    args = [sd].concat(args)
  } else {
    args = [sd]
  }
  cec.sendCommand.apply(cec, args)
}

CECClient.Opcode = Opcode
CECClient.InverseOpcode = InverseOpcode
CECClient.LogicalAddress = LogicalAddress

CECClient.Commands = Commands
CECClient.Handlers = Handlers

module.exports = CECClient
