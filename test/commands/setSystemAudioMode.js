/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Commands = require('../../lib/CECClient').Commands

module.exports = function test_setSystemAudioMode(client) {
  it('should exist', function() {
    expect(Commands.setSystemAudioMode).toExist('Commands.setSystemAudioMode is not defined')
  })
}
