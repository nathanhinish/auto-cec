/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Commands = require('../../lib/CECClient').Commands

module.exports = function test_givePhysicalAddress(client) {
  it('should exist', function() {
    expect(Commands.givePhysicalAddress).toExist('Commands.givePhysicalAddress is not defined')
  })
}
