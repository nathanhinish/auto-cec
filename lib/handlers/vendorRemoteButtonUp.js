'use strict'

const CEC = require('node-cec').CEC

module.exports = function vendorRemoteButtonUp(packet) {
  console.info('VENDOR_REMOTE_BUTTON_UP', packet)
}
