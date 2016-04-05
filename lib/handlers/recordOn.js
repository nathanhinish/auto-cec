'use strict'

const CEC = require('node-cec').CEC

module.exports = function recordOn(packet) {
  console.info('RECORD_ON', JSON.stringify(packet))
}
