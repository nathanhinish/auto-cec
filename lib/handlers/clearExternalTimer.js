'use strict'

const CEC = require('node-cec').CEC

module.exports = function clearExternalTimer(packet) {
  console.info('CLEAR_EXTERNAL_TIMER', JSON.stringify(packet))
}
