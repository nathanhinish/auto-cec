'use strict'

const debug = require('debug')('cec:handler:<%= original %>')

module.exports = function <%= camel %>(packet) {
  debug('<%= original %>', packet)
  this.emit('<%= original %>', packet)
}
