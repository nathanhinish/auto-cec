'use strict'

const expect = require('expect')
const sinon = require('sinon')

const ClientProxy = require('../common/ClientProxy')

const Commands = require('../../lib/CECClient').Commands
const LogicalAddress = CECClient.LogicalAddress
const InverseOpcode = CECClient.InverseOpcode

const BASE_16 = 16
const MESSAGE = 'Hello world'
const MSG_HEX = '48:65:6C:6C:6F:20:77:6F:72:6C:64'

const proxy = new ClientProxy()

describe('#setOsdString', function() {

  before(function before(done) {
    proxy.create(done)
  })

  after(function after(done) {
    proxy.destroy(done)
  })

  let chars = MESSAGE.split('').map((c) => c.charCodeAt(0))

  it('should exist', function () {
    expect(Commands.setOsdString).toExist('Commands.setOsdString is not defined')
  })

  it('should have the correct set of characters in the message', () => {
    let str = chars.map((c) => c.toString(BASE_16).toUpperCase()).join(':')
    expect(str).toBe(MSG_HEX)
  })

  it('should get a return message', (done) => {
    // const callback = sinon.spy()
    // client.cec.on(InverseOpcode., function onPacket(packet) {
    //   expect(packet.opcode).toBe(CECClient.Opcode.SET_OSD_STRING)
    //   done()
    // })
    proxy.target.setOsdString(LogicalAddress.TV, chars)
    setTimeout(done, 4000)
  })

})
