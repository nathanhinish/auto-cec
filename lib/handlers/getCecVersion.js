'use strict'

const CEC = require('node-cec').CEC

module.exports = function getCecVersion(packet) {
  console.info('GET_CEC_VERSION', JSON.stringify(packet))
}
