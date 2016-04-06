'use strict'

const debug = require('debug')('cec:handler:REPORT_ARC_STARTED')

module.exports = function reportArcStarted(packet) {
  debug('REPORT_ARC_STARTED', packet)
  this.emit('REPORT_ARC_STARTED', packet)
}
