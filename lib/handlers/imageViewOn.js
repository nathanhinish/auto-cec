'use strict'

const debug = require('debug')('cec:handler:IMAGE_VIEW_ON')

module.exports = function imageViewOn(packet) {
  debug(JSON.stringify(packet))
  this.emit('IMAGE_VIEW_ON', packet)
}
