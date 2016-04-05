'use strict'

const CEC = require('node-cec').CEC

module.exports = function clearDigitalTimer(packet) {
  console.info('CLEAR_DIGITAL_TIMER', JSON.stringify(packet))
}
