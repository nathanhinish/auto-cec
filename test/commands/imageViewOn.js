/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Commands = require('../../lib/CECClient').Commands

module.exports = function test_imageViewOn(client) {
  it('should exist', function() {
    expect(Commands.imageViewOn).toExist('Commands.imageViewOn is not defined')
  })
}
