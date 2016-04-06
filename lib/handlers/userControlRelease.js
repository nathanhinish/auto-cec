'use strict'

const debug = require('debug')('cec:handler:USER_CONTROL_RELEASE')

module.exports = function userControlRelease(packet) {
  debug('USER_CONTROL_RELEASE', JSON.stringify(packet))
  this.emit('USER_CONTROL_RELEASE', packet)
}
