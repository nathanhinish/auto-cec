'use strict'

const debug = require('debug')('cec:handler:ROUTING_INFORMATION')

module.exports = function routingInformation(packet) {
  debug('ROUTING_INFORMATION', packet)
  this.emit('ROUTING_INFORMATION', packet)
}
