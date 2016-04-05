'use strict'

const CEC = require('node-cec').CEC

module.exports = function vendorRemoteButtonDown(packet) {
  console.info('VENDOR_REMOTE_BUTTON_DOWN', JSON.stringify(packet))
}
