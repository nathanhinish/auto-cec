'use strict'

const CEC = require('node-cec').CEC

module.exports = function timerStatus(packet) {
  console.info('TIMER_STATUS', JSON.stringify(packet))
}
