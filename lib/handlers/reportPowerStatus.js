'use strict'

const debug = require('debug')('cec:handler:REPORT_POWER_STATUS')

module.exports = function reportPowerStatus(packet) {
  debug(JSON.stringify(packet))
  this.emit('REPORT_POWER_STATUS', packet)
}
