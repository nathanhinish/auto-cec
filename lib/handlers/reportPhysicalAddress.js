'use strict'

const debug = require('debug')('cec:handler:REPORT_PHYSICAL_ADDRESS')

module.exports = function reportPhysicalAddress(packet) {
  debug('REPORT_PHYSICAL_ADDRESS', packet)
  this.emit('REPORT_PHYSICAL_ADDRESS', packet)
}
