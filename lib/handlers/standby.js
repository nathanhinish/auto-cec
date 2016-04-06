'use strict'

const debug = require('debug')('cec:handler:STANDBY')

module.exports = function standby(packet) {
  debug('STANDBY', JSON.stringify(packet))
  this.emit('STANDBY', packet)
}
