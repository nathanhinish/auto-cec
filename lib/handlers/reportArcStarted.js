'use strict'

const CEC = require('node-cec').CEC

module.exports = function reportArcStarted(packet) {
  console.info('REPORT_ARC_STARTED', JSON.stringify(packet))
}
