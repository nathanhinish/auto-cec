'use strict'

const CEC = require('node-cec').CEC

module.exports = function setTimerProgramTitle(packet) {
  console.info('SET_TIMER_PROGRAM_TITLE', JSON.stringify(packet))
}
