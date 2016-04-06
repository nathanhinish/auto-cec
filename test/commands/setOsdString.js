/* eslint camelcase: 0 */
'use strict'

const expect = require('expect')
const sinon = require('sinon')

const Commands = require('../../lib/CECClient').Commands

const BASE_16 = 16
const MESSAGE = 'Hello world'
const MSG_HEX = '48:65:6C:6C:6F:20:77:6F:72:6C:64'

module.exports = function test_setOsdString(client) {
  // F0:64:00:48:65:6C:6C:6F:20:77:6F:72:6C:64
  let chars = MESSAGE.split('').map((c) => c.charCodeAt(0))

  it('should exist', function () {
    expect(Commands.setOsdString).toExist('Commands.setOsdString is not defined')
  })

  it('should have the correct set of characters in the message', () => {
    let str = chars.map((c) => c.toString(BASE_16).toUpperCase()).join(':')
    expect(str).toBe(MSG_HEX)
  })

  // it('should get a return message', (done) => {
  //   client.cec.on('packet', function(packet) {
  //     expect(packet.opcode).toBe()
  //   })
  //   client.setOsdString(CECClient.LogicalAddress.TV, chars)
  // })
}
