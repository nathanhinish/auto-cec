'use strict'

const debug = require('debug')('cec:handler:USER_CONTROL_PRESSED')

module.exports = function userControlPressed(packet) {
  debug(JSON.stringify(packet))
  this.emit('USER_CONTROL_PRESSED', packet)
}
