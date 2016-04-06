'use strict'

const debug = require('debug')('cec:handler:PLAY')

module.exports = function play(packet) {
  debug('PLAY', JSON.stringify(packet))
  this.emit('PLAY', packet)
}
