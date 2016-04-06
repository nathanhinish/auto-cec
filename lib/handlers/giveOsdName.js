'use strict'

const debug = require('debug')('cec:handler:GIVE_OSD_NAME')

module.exports = function giveOsdName(packet) {
  debug(JSON.stringify(packet))
  this.emit('GIVE_OSD_NAME', packet)
}
