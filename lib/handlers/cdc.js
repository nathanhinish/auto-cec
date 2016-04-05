'use strict'

const CEC = require('node-cec').CEC

module.exports = function cdc(packet) {
  console.info('CDC', packet)
}
