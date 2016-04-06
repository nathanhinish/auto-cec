'use strict'

const debug = require('debug')('cec:handler:REPORT_ARC_ENDED')

module.exports = function reportArcEnded(packet) {
  debug('REPORT_ARC_ENDED', packet)
  this.emit('REPORT_ARC_ENDED', packet)
}
