'use strict'

const CEC = require('node-cec').CEC

module.exports = function selectAnalogueService(packet) {
  console.info('SELECT_ANALOGUE_SERVICE', JSON.stringify(packet))
}
