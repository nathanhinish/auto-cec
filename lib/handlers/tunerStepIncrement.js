'use strict'

const debug = require('debug')('cec:handler:TUNER_STEP_INCREMENT')

module.exports = function tunerStepIncrement(packet) {
  debug('TUNER_STEP_INCREMENT', packet)
  this.emit('TUNER_STEP_INCREMENT', packet)
}
