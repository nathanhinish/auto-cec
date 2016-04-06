'use strict'

const debug = require('debug')('cec:handler:SET_STREAM_PATH')

module.exports = function setStreamPath(packet) {
  debug('SET_STREAM_PATH', JSON.stringify(packet))
  this.emit('SET_STREAM_PATH', packet)
}
