'use strict'

const CEC = require('node-cec').CEC

module.exports = function setAnalogueTimer(packet) {
  console.info('SET_ANALOGUE_TIMER', JSON.stringify(packet))
}
