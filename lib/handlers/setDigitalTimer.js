'use strict'

const CEC = require('node-cec').CEC

module.exports = function setDigitalTimer(packet) {
  console.info('SET_DIGITAL_TIMER', JSON.stringify(packet))
}
