'use strict'

const CEC = require('node-cec').CEC

module.exports = function tunerStepDecrement(packet) {
  console.info('TUNER_STEP_DECREMENT', packet)
}
