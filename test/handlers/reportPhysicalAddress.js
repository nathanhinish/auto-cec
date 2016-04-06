/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Handlers = require('../../lib/CECClient').Handlers

module.exports = function test_reportPhysicalAddress(client) {
  it('should exist', function() {
    expect(Handlers.reportPhysicalAddress).toExist('Handlers.reportPhysicalAddress is not defined')
  })
}
