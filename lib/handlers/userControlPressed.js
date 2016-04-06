'use strict'

const debug = require('debug')('cec:handler:USER_CONTROL_PRESSED')

module.exports = function userControlPressed(packet) {
  debug('USER_CONTROL_PRESSED', packet)
  this.emit('USER_CONTROL_PRESSED', packet)
}
