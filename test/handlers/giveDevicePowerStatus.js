/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Handlers = require('../../lib/CECClient').Handlers

module.exports = function test_giveDevicePowerStatus(client) {
  it('should exist', function() {
    expect(Handlers.giveDevicePowerStatus).toExist('Handlers.giveDevicePowerStatus is not defined')
  })
}
