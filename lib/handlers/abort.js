'use strict'

const debug = require('debug')('cec:handler:ABORT')

module.exports = function abort(packet) {
  debug(JSON.stringify(packet))
  this.emit('ABORT', packet)
}
