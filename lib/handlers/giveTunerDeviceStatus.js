'use strict'

const debug = require('debug')('cec:handler:GIVE_TUNER_DEVICE_STATUS')

module.exports = function giveTunerDeviceStatus(packet) {
  debug(JSON.stringify(packet))
  this.emit('GIVE_TUNER_DEVICE_STATUS', packet)
}
