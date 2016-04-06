'use strict'

const debug = require('debug')('cec:handler:FEATURE_ABORT')

module.exports = function featureAbort(packet) {
  debug(JSON.stringify(packet))
  this.emit('FEATURE_ABORT', packet)
}
