'use strict'

const CEC = require('node-cec').CEC

module.exports = function requestArcEnd(packet) {
  console.info('REQUEST_ARC_END', JSON.stringify(packet))
}
