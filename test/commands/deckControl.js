/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Commands = require('../../lib/CECClient').Commands

module.exports = function test_deckControl(client) {
  it('should exist', function() {
    expect(Commands.deckControl).toExist('Commands.deckControl is not defined')
  })
}
