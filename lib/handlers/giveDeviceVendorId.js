'use strict'

const debug = require('debug')('cec:handler:GIVE_DEVICE_VENDOR_ID')

module.exports = function giveDeviceVendorId(packet) {
  debug(JSON.stringify(packet))
  this.emit('GIVE_DEVICE_VENDOR_ID', packet)
}
