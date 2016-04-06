'use strict'

const debug = require('debug')('cec:handler:PLAY')

module.exports = function play(packet) {
  debug('PLAY', packet)
  this.emit('PLAY', packet)
}
