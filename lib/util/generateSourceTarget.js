'use strict'

const SHIFTER = 0x10

module.exports = function generateSourceTarget(source, target) {
  return source * SHIFTER + target
}
