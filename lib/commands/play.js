'use strict'

const CEC = require('node-cec').CEC

module.exports = function play(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.PLAY)
  this.sendCommand(target, args)
}
