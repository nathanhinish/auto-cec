'use strict'

const CEC = require('node-cec').CEC

module.exports = function tunerDeviceStatus(packet) {
  console.info('TUNER_DEVICE_STATUS', JSON.stringify(packet))
}
