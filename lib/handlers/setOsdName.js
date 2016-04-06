'use strict'

const debug = require('debug')('cec:handler:SET_OSD_NAME')

module.exports = function setOsdName(packet) {
  debug('SET_OSD_NAME', packet)
  this.emit('SET_OSD_NAME', packet)
}
