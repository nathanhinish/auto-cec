'use strict'

const CEC = require('node-cec').CEC

module.exports = function standby(packet) {
  console.info('STANDBY', JSON.stringify(packet))
}
