'use strict'

const debug = require('debug')('cec:handler:TUNER_DEVICE_STATUS')

module.exports = function tunerDeviceStatus(packet) {
  debug(JSON.stringify(packet))
  this.emit('TUNER_DEVICE_STATUS', packet)
}
