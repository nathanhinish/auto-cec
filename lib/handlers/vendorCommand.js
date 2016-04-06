'use strict'

const debug = require('debug')('cec:handler:VENDOR_COMMAND')

module.exports = function vendorCommand(packet) {
  debug(JSON.stringify(packet))
  this.emit('VENDOR_COMMAND', packet)
}
