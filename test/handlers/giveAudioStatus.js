/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Handlers = require('../../lib/CECClient').Handlers

module.exports = function test_giveAudioStatus(client) {
  it('should exist', function() {
    expect(Handlers.giveAudioStatus).toExist('Handlers.giveAudioStatus is not defined')
  })
}
