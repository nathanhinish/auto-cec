'use strict'

const snakeCase = require('lodash/snakeCase')
const invert = require('lodash/invert')

const NodeCec = require('node-cec').NodeCec
const CEC = require('node-cec').CEC

const generateSourceTarget = require('./util/generateSourceTarget')

const Commands = require('require-dir')('./commands')
const Handlers = require('require-dir')('./handlers')

const DEBUG = true

const VendorId = CEC.VendorId
const LogicalAddress = CEC.LogicalAddress
const UserControlCode = CEC.UserControlCode
const PowerStatus = CEC.PowerStatus
const Opcode = CEC.Opcode
const InverseOpcode = invert(Opcode)
const OpcodeKeys = {}
for (let key in CEC.Opcode) {
  if (key) {
    OpcodeKeys[key] = key
  }
}

function CECClient(name) {

  let handlers = {}

  for (let hName in Handlers) {
    handlers[hName] = Handlers[hName].bind(this)
  }

  this.cec = new NodeCec(name || 'boom')

  this.cec.processPacket = function (packet) {
    for (let code in Opcode) {
      if (Opcode[code] === packet.opcode) {
        this.emit.apply(this, [code, packet].concat(packet.args))
        return true
      }
    }
    this.emit('packet', packet)
    return false
  }

  this.cec.on('packet', (packet) => {
    console.info(packet)
    let codeKey = InverseOpcode[packet.opcode]
    let handler = handlers[codeKey]
    if (typeof handler === 'function') {
      handler(packet)
    }
  })
}

CECClient.prototype.SHIFTER = 0x10
CECClient.prototype.PROC_CMD = 'cec-client'
CECClient.prototype.PROC_ARGS = ['-m', '-d', '8', 'RPI']

CECClient.prototype.start = function start() {
  this.cec.start.apply(this.cec, [this.PROC_CMD].concat(this.PROC_ARGS))
}

CECClient.prototype.sendCommand = function sendCommand(target, args) {
  let cec = this.cec
  let sd = generateSourceTarget(LogicalAddress.RECORDINGDEVICE1, target || LogicalAddress.BROADCAST)
  args = [sd].concat(args)
  cec.sendCommand.apply(cec, args)
}

for (let key in Commands) {
  CECClient.prototype[key] = Commands[key]
}

module.exports = CECClient
