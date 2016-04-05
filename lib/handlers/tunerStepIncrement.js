'use strict'

const CEC = require('node-cec').CEC

module.exports = function tunerStepIncrement(packet) {
  console.info('TUNER_STEP_INCREMENT', packet)
}
