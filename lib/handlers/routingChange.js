'use strict'

const debug = require('debug')('cec:handler:ROUTING_CHANGE')

module.exports = function routingChange(packet) {
  debug('ROUTING_CHANGE', packet)
  this.emit('ROUTING_CHANGE', packet)
}
