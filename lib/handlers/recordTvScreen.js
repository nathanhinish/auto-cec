'use strict'

const CEC = require('node-cec').CEC

module.exports = function recordTvScreen(packet) {
  console.info('RECORD_TV_SCREEN', JSON.stringify(packet))
}
