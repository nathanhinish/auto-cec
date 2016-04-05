'use strict'

const CEC = require('node-cec').CEC

module.exports = function timerClearedStatus(packet) {
  console.info('TIMER_CLEARED_STATUS', JSON.stringify(packet))
}
