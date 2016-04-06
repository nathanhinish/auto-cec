/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Handlers = require('../../lib/CECClient').Handlers

module.exports = function test_deviceVendorId(client) {
  it('should exist', function() {
    expect(Handlers.deviceVendorId).toExist('Handlers.deviceVendorId is not defined')
  })
}
