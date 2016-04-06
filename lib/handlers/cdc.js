'use strict'

const debug = require('debug')('cec:handler:CDC')

module.exports = function cdc(packet) {
  debug(JSON.stringify(packet))
  this.emit('CDC', packet)
}
