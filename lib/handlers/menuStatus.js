'use strict'

const debug = require('debug')('cec:handler:MENU_STATUS')

module.exports = function menuStatus(packet) {
  debug('MENU_STATUS', JSON.stringify(packet))
  this.emit('MENU_STATUS', packet)
}
