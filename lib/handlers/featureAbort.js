'use strict'

const debug = require('debug')('cec:handler:FEATURE_ABORT')

module.exports = function featureAbort(packet) {
  debug('FEATURE_ABORT', JSON.stringify(packet))
  this.emit('FEATURE_ABORT', packet)
}
