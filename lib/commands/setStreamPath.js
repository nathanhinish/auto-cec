'use strict'

const CEC = require('node-cec').CEC

module.exports = function setStreamPath(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.SET_STREAM_PATH)
  this.sendCommand(target, args)
}
