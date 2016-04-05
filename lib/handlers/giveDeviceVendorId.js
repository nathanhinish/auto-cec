'use strict'

const CEC = require('node-cec').CEC

module.exports = function giveDeviceVendorId(packet) {
  console.info('GIVE_DEVICE_VENDOR_ID', JSON.stringify(packet))
}
