/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Handlers = require('../../lib/CECClient').Handlers

module.exports = function test_userControlPressed(client) {
  it('should exist', function() {
    expect(Handlers.userControlPressed).toExist('Handlers.userControlPressed is not defined')
  })
}
