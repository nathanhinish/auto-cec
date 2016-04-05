'use strict'

const CEC = require('node-cec').CEC

module.exports = function clearAnalogueTimer(packet) {
  console.info('CLEAR_ANALOGUE_TIMER', JSON.stringify(packet))
}
