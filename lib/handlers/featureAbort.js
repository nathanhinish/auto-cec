'use strict'

const CEC = require('node-cec').CEC

module.exports = function featureAbort(packet) {
  console.info('FEATURE_ABORT', JSON.stringify(packet))
}
