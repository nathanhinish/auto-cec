'use strict'

const debug = require('debug')('cec:handler:PLAY')

module.exports = function play(packet) {
  debug(JSON.stringify(packet))
  this.emit('PLAY', packet)
}
