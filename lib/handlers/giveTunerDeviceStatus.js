'use strict'

const debug = require('debug')('cec:handler:GIVE_TUNER_DEVICE_STATUS')

module.exports = function giveTunerDeviceStatus(packet) {
  debug('GIVE_TUNER_DEVICE_STATUS', JSON.stringify(packet))
  this.emit('GIVE_TUNER_DEVICE_STATUS', packet)
}
