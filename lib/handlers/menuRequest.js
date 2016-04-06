'use strict'

const debug = require('debug')('cec:handler:MENU_REQUEST')

module.exports = function menuRequest(packet) {
  debug('MENU_REQUEST', JSON.stringify(packet))
  this.emit('MENU_REQUEST', packet)
}
