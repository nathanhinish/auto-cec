'use strict'

const debug = require('debug')('cec:handler:REPORT_PHYSICAL_ADDRESS')

module.exports = function reportPhysicalAddress(packet) {
  debug(JSON.stringify(packet))
  this.emit('REPORT_PHYSICAL_ADDRESS', packet)
}
