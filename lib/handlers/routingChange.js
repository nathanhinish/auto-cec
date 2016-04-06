'use strict'

const debug = require('debug')('cec:handler:ROUTING_CHANGE')

module.exports = function routingChange(packet) {
  debug('ROUTING_CHANGE', JSON.stringify(packet))
  this.emit('ROUTING_CHANGE', packet)
}
