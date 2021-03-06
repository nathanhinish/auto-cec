'use strict'

const debug = require('debug')('cec:handler:TUNER_STEP_INCREMENT')

module.exports = function tunerStepIncrement(packet) {
  debug(JSON.stringify(packet))
  this.emit('TUNER_STEP_INCREMENT', packet)
}
