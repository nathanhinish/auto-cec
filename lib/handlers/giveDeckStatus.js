'use strict'

const debug = require('debug')('cec:handler:GIVE_DECK_STATUS')

module.exports = function giveDeckStatus(packet) {
  debug(JSON.stringify(packet))
  this.emit('GIVE_DECK_STATUS', packet)
}
