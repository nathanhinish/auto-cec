'use strict'

const CEC = require('node-cec').CEC

module.exports = function reportPowerStatus(packet) {
  console.info('REPORT_POWER_STATUS', JSON.stringify(packet))
}
