'use strict'

const CEC = require('node-cec').CEC

module.exports = function vendorCommand(packet) {
  console.info('VENDOR_COMMAND', JSON.stringify(packet))
}
