'use strict'

const debug = require('debug')('cec:handler:TEXT_VIEW_ON')

module.exports = function textViewOn(packet) {
  debug(JSON.stringify(packet))
  this.emit('TEXT_VIEW_ON', packet)
}
