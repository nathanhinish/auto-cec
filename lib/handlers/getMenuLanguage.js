'use strict'

const debug = require('debug')('cec:handler:GET_MENU_LANGUAGE')

module.exports = function getMenuLanguage(packet) {
  debug('GET_MENU_LANGUAGE', JSON.stringify(packet))
  this.emit('GET_MENU_LANGUAGE', packet)
}
