'use strict'

const debug = require('debug')('cec:handler:ABORT')

module.exports = function abort(packet) {
  debug('ABORT', JSON.stringify(packet))
  this.emit('ABORT', packet)
}
