'use strict'

const CEC = require('node-cec').CEC

module.exports = function giveDevicePowerStatus(packet) {
  console.info('GIVE_DEVICE_POWER_STATUS', JSON.stringify(packet))
}
