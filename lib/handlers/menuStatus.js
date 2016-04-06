'use strict'

const debug = require('debug')('cec:handler:MENU_STATUS')

module.exports = function menuStatus(packet) {
  debug('MENU_STATUS', packet)
  this.emit('MENU_STATUS', packet)
}
