'use strict'

const CEC = require('node-cec').CEC

module.exports = function vendorCommandWithId(packet) {
  console.info('VENDOR_COMMAND_WITH_ID', JSON.stringify(packet))
}
