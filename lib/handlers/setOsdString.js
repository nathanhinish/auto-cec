'use strict'

const debug = require('debug')('cec:handler:SET_OSD_STRING')

module.exports = function setOsdString(packet) {
  debug(JSON.stringify(packet))
  this.emit('SET_OSD_STRING', packet)
}
