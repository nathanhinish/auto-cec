'use strict'

const CEC = require('node-cec').CEC

module.exports = function textViewOn(packet) {
  console.info('TEXT_VIEW_ON', packet)
}
