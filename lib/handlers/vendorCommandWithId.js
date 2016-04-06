'use strict'

const debug = require('debug')('cec:handler:VENDOR_COMMAND_WITH_ID')

module.exports = function vendorCommandWithId(packet) {
  debug('VENDOR_COMMAND_WITH_ID', JSON.stringify(packet))
  this.emit('VENDOR_COMMAND_WITH_ID', packet)
}
