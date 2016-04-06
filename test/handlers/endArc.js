/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Handlers = require('../../lib/CECClient').Handlers

module.exports = function test_endArc(client) {
  it('should exist', function() {
    expect(Handlers.endArc).toExist('Handlers.endArc is not defined')
  })
}
