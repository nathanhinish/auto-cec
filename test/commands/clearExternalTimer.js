/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Commands = require('../../lib/CECClient').Commands

module.exports = function test_clearExternalTimer(client) {
  it('should exist', function() {
    expect(Commands.clearExternalTimer).toExist('Commands.clearExternalTimer is not defined')
  })
}
