'use strict'

const CEC = require('node-cec').CEC

module.exports = function imageViewOn(target, args) {
  args = args || []
  args.unshift(CEC.Opcode.IMAGE_VIEW_ON)
  this.sendCommand(target, args)
}
