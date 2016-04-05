'use strict'

const SHIFTER = 0x100 // shift two hex spots

module.exports = function reduceArgsBytes(b) {
  let len = b.length
  return b.reduce((incoming, val, ind) => {
    return incoming + Math.pow(SHIFTER, len - (ind + 1))
  })
}
