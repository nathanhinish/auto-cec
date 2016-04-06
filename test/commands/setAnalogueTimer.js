/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Commands = require('../../lib/CECClient').Commands

module.exports = function test_setAnalogueTimer(client) {
  it('should exist', function() {
    expect(Commands.setAnalogueTimer).toExist('Commands.setAnalogueTimer is not defined')
  })
}
