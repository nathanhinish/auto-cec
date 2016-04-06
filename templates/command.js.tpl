'use strict'

const debug = require('debug')('cec:handler:<%= original %>')
const CEC = require('node-cec').CEC

module.exports = function <%= camel %>(target, args) {
  debug(JSON.stringify(packet))
  args = args || []
  args.unshift(CEC.Opcode.<%= original %>)
  this.sendCommand(target, args)
}
