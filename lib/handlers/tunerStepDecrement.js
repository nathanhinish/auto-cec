'use strict'

const debug = require('debug')('cec:handler:TUNER_STEP_DECREMENT')

module.exports = function tunerStepDecrement(packet) {
  debug('TUNER_STEP_DECREMENT', JSON.stringify(packet))
  this.emit('TUNER_STEP_DECREMENT', packet)
}
