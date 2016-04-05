'use strict'

const CEC = require('node-cec').CEC

module.exports = function deckStatus(packet) {
  console.info('DECK_STATUS', packet)
}
