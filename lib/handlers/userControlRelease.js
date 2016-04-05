'use strict'

const CEC = require('node-cec').CEC

module.exports = function userControlRelease(packet) {
  console.info('USER_CONTROL_RELEASE', JSON.stringify(packet))
}
