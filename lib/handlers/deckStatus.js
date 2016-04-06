'use strict'

const debug = require('debug')('cec:handler:DECK_STATUS')

module.exports = function deckStatus(packet) {
  debug('DECK_STATUS', packet)
  this.emit('DECK_STATUS', packet)
}
