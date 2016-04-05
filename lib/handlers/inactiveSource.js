'use strict'

const CEC = require('node-cec').CEC

module.exports = function inactiveSource(packet) {
  console.info('INACTIVE_SOURCE', packet)
}
