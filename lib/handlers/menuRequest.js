'use strict'

const CEC = require('node-cec').CEC

module.exports = function menuRequest(packet) {
  console.info('MENU_REQUEST', JSON.stringify(packet))
}
