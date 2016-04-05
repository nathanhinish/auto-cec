'use strict'

const CEC = require('node-cec').CEC

module.exports = function recordOff(packet) {
  console.info('RECORD_OFF', JSON.stringify(packet))
}
