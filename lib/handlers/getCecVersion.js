'use strict'

const debug = require('debug')('cec:handler:GET_CEC_VERSION')

module.exports = function getCecVersion(packet) {
  debug(JSON.stringify(packet))
  this.emit('GET_CEC_VERSION', packet)
}
