'use strict'

const debug = require('debug')('cec:handler:RECORD_TV_SCREEN')

module.exports = function recordTvScreen(packet) {
  debug('RECORD_TV_SCREEN', JSON.stringify(packet))
  this.emit('RECORD_TV_SCREEN', packet)
}
