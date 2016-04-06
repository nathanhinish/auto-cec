/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Commands = require('../../lib/CECClient').Commands

module.exports = function test_none(client) {
  it('should exist', function() {
    expect(Commands.none).toExist('Commands.none is not defined')
  })
}
