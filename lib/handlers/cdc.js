'use strict'

const CEC = require('node-cec').CEC

module.exports = function cdc(packet) {
  console.info('CDC', JSON.stringify(packet))
}
