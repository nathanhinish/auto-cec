'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Handlers = require('../../lib/CECClient').Handlers

module.exports = function test_<%= camel %>(client) {
  it('should exist', function() {
    expect(Handlers.<%= camel %>).toExist('Handlers.<%= camel %> is not defined')
  })
}
