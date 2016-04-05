'use strict'

const CEC = require('node-cec').CEC

module.exports = function menuStatus(packet) {
  console.info('MENU_STATUS', packet)
}
