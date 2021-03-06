'use strict'

const debug = require('debug')('cec:handler:ROUTING_INFORMATION')

module.exports = function routingInformation(packet) {
  debug(JSON.stringify(packet))
  this.emit('ROUTING_INFORMATION', packet)
}
