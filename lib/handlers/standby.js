'use strict'

const debug = require('debug')('cec:handler:STANDBY')

module.exports = function standby(packet) {
  debug(JSON.stringify(packet))
  this.emit('STANDBY', packet)
}
