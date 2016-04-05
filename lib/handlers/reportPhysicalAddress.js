'use strict'

const CEC = require('node-cec').CEC

module.exports = function reportPhysicalAddress(packet) {
  console.info('REPORT_PHYSICAL_ADDRESS', packet)
}
