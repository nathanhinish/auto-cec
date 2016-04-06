'use strict'

const debug = require('debug')('cec:handler:IMAGE_VIEW_ON')

module.exports = function imageViewOn(packet) {
  debug('IMAGE_VIEW_ON', packet)
  this.emit('IMAGE_VIEW_ON', packet)
}
