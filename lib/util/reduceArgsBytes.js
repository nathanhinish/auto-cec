'use strict'

const HEX = 0x10
const SHIFTER = Math.pow(HEX, 2) // shift two hex spots

module.exports = function reduceArgsBytes(b) {
  let len = b.length
  return b.reduce((incoming, val, ind) => {
    if (typeof val === 'string') {
      val = parseInt(val, HEX)
    }
    return incoming + val * Math.pow(SHIFTER, len - (ind + 1))
  }, 0)
}
