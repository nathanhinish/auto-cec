'use strict'

const debug = require('debug')('cec:handler:GIVE_DEVICE_POWER_STATUS')

module.exports = function giveDevicePowerStatus(packet) {
  debug('GIVE_DEVICE_POWER_STATUS', JSON.stringify(packet))
  this.emit('GIVE_DEVICE_POWER_STATUS', packet)
}
