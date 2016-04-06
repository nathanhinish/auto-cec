'use strict'

const debug = require('debug')('cec:handler:TEXT_VIEW_ON')

module.exports = function textViewOn(packet) {
  debug('TEXT_VIEW_ON', JSON.stringify(packet))
  this.emit('TEXT_VIEW_ON', packet)
}
