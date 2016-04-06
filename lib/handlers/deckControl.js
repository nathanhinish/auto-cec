'use strict'

const debug = require('debug')('cec:handler:DECK_CONTROL')

module.exports = function deckControl(packet) {
  debug(JSON.stringify(packet))
  this.emit('DECK_CONTROL', packet)
}
