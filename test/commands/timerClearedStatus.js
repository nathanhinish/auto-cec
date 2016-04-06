/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Commands = require('../../lib/CECClient').Commands

module.exports = function test_timerClearedStatus(client) {
  it('should exist', function() {
    expect(Commands.timerClearedStatus).toExist('Commands.timerClearedStatus is not defined')
  })
}
