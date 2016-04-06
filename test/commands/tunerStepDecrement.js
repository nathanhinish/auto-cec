/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Commands = require('../../lib/CECClient').Commands

module.exports = function test_tunerStepDecrement(client) {
  it('should exist', function() {
    expect(Commands.tunerStepDecrement).toExist('Commands.tunerStepDecrement is not defined')
  })
}
