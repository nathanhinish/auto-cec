'use strict'

const CEC = require('node-cec').CEC

module.exports = function selectDigitalService(packet) {
  console.info('SELECT_DIGITAL_SERVICE', JSON.stringify(packet))
}
