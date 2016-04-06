'use strict'

const debug = require('debug')('cec:handler:VENDOR_REMOTE_BUTTON_DOWN')

module.exports = function vendorRemoteButtonDown(packet) {
  debug(JSON.stringify(packet))
  this.emit('VENDOR_REMOTE_BUTTON_DOWN', packet)
}
