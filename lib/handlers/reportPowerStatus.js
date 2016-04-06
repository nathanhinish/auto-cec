'use strict'

const debug = require('debug')('cec:handler:REPORT_POWER_STATUS')

module.exports = function reportPowerStatus(packet) {
  debug('REPORT_POWER_STATUS', packet)
  this.emit('REPORT_POWER_STATUS', packet)
}
