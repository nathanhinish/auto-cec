'use strict'

const debug = require('debug')('cec:handler:SET_OSD_NAME')

module.exports = function setOsdName(packet) {
  debug(JSON.stringify(packet))
  this.emit('SET_OSD_NAME', packet)
}
