'use strict'

const CEC = require('node-cec').CEC

module.exports = function givePhysicalAddress(packet) {
  console.info('GIVE_PHYSICAL_ADDRESS', JSON.stringify(packet))
}
