'use strict'

const CEC = require('node-cec').CEC

module.exports = function routingChange(packet) {
  console.info('ROUTING_CHANGE', JSON.stringify(packet))
}
