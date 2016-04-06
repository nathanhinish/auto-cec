'use strict'

const debug = require('debug')('cec:handler:SET_MENU_LANGUAGE')

module.exports = function setMenuLanguage(packet) {
  debug('SET_MENU_LANGUAGE', packet)
  this.emit('SET_MENU_LANGUAGE', packet)
}
