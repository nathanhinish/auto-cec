'use strict'

module.exports = function getKeyFromValue(coll, val) {
  for (let key in coll) {
    if (coll[key] === val) {
      return key
    }
  }
}
