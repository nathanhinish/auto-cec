'use strict'

const CEC = require('node-cec').CEC

module.exports = function cecVersion(packet) {
  console.info('CEC_VERSION', packet)
}
