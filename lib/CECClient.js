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

function CECClient(name) {

  for (let key in Commands) {
    this[key] = Commands[key].bind(this)
  }

  this.cec = new NodeCec(name || 'boom')

  this.cec.processPacket = function (packet) {
    try {
      debug('  -->', packet)
    } catch (err) {
      debug(err)
    }

    let codeKey = InverseOpcode[packet.opcode]
    let handlerName = camelCase(codeKey)
    let handler = Handlers[handlerName]

    if (typeof handler === 'function') {
      handler.bind(this)(packet)
      return true
    }

    this.emit('packet', packet)
    return false
  }

  this.cec.on('data', (data) => {
    try {
      debug('  ==>', data)
    } catch (err) {
      debug(err)
    }
  })
}

require('util').inherits(CECClient, require('events').EventEmitter)

CECClient.prototype.SHIFTER = 0x10
CECClient.prototype.PROC_CMD = 'cec-client'
CECClient.prototype.PROC_ARGS = ['-m', '-d', '8', '-b', 'r']

CECClient.prototype.start = function start(done) {
  let args = [this.PROC_CMD].concat(this.PROC_ARGS)
  this.cec.once('ready', done || function noop() {})
  this.cec.start.apply(this.cec, args)
}

CECClient.prototype.stop = function stop(done) {
  let received = 0
  let self = this

  function onStop() {
    received = received + 1
    if (received > 1) {
      self.stopListening('stop', onStop)
      if (done) {
        done(null, self)
      }
    }
  }

  this.on('stop', onStop)
  this.cec.stop()
}

CECClient.prototype.sendCommand = function sendCommand(target, args) {
  let cec = this.cec
  let sd = generateSourceTarget(LogicalAddress.RECORDINGDEVICE1, target || LogicalAddress.BROADCAST)
  args = [sd].concat(args)
  cec.sendCommand.apply(cec, args)
}

CECClient.Opcode = Opcode
CECClient.LogicalAddress = LogicalAddress

CECClient.Commands = Commands
CECClient.Handlers = Handlers

module.exports = CECClient
