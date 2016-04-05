'use strict'

const CEC = require('node-cec').CEC

module.exports = function giveTunerDeviceStatus(packet) {
  console.info('GIVE_TUNER_DEVICE_STATUS', JSON.stringify(packet))
}
