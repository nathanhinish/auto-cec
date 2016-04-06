'use strict'

const debug = require('debug')('cec:handler:TUNER_STEP_DECREMENT')

module.exports = function tunerStepDecrement(packet) {
  debug(JSON.stringify(packet))
  this.emit('TUNER_STEP_DECREMENT', packet)
}
