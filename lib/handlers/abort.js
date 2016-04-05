'use strict'

const CEC = require('node-cec').CEC

module.exports = function abort(packet) {
  console.info('ABORT', JSON.stringify(packet))
}
