'use strict'

const debug = require('debug')('cec:handler:VENDOR_REMOTE_BUTTON_UP')

module.exports = function vendorRemoteButtonUp(packet) {
  debug(JSON.stringify(packet))
  this.emit('VENDOR_REMOTE_BUTTON_UP', packet)
}
