'use strict'

const CEC = require('node-cec').CEC

module.exports = function setStreamPath(packet) {
  console.info('SET_STREAM_PATH', JSON.stringify(packet))
}
