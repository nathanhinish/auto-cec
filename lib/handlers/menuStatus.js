'use strict'

const debug = require('debug')('cec:handler:MENU_STATUS')

module.exports = function menuStatus(packet) {
  debug(JSON.stringify(packet))
  this.emit('MENU_STATUS', packet)
}
