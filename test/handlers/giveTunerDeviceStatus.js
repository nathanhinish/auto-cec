/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Handlers = require('../../lib/CECClient').Handlers

module.exports = function test_giveTunerDeviceStatus(client) {
  it('should exist', function() {
    expect(Handlers.giveTunerDeviceStatus).toExist('Handlers.giveTunerDeviceStatus is not defined')
  })
}
