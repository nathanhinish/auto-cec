'use strict'

const CEC = require('node-cec').CEC

module.exports = function userControlPressed(packet) {
  console.info('USER_CONTROL_PRESSED', JSON.stringify(packet))
}
