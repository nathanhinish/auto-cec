'use strict'

const CEC = require('node-cec').CEC

module.exports = function reportArcEnded(packet) {
  console.info('REPORT_ARC_ENDED', packet)
}
