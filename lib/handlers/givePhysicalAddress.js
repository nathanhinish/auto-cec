'use strict'

const debug = require('debug')('cec:handler:GIVE_PHYSICAL_ADDRESS')

module.exports = function givePhysicalAddress(packet) {
  debug('GIVE_PHYSICAL_ADDRESS', JSON.stringify(packet))
  this.emit('GIVE_PHYSICAL_ADDRESS', packet)
}
