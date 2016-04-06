/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Commands = require('../../lib/CECClient').Commands

module.exports = function test_deckStatus(client) {
  it('should exist', function() {
    expect(Commands.deckStatus).toExist('Commands.deckStatus is not defined')
  })
}
