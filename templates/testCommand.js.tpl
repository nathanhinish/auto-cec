'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Commands = require('../../lib/CECClient').Commands

module.exports = function test_<%= camel %>(client) {
  it('should exist', function() {
    expect(Commands.<%= camel %>).toExist('Commands.<%= camel %> is not defined')
  })
}
