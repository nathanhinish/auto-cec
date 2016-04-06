/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Commands = require('../../lib/CECClient').Commands

module.exports = function test_abort(client) {
  it('should exist', function() {
    expect(Commands.abort).toExist('Commands.abort is not defined')
  })
}
