'use strict'

const debug = require('debug')('cec:test:osdName')
const expect = require('expect')

const ClientProxy = require('../common/ClientProxy')

const CECClient = require('../../lib/CECClient')
const Commands = CECClient.Commands
const Handlers = CECClient.Handlers
const LogicalAddress = CECClient.LogicalAddress

const proxy = new ClientProxy()

describe('Commands.giveOsdName & Handlers.setOsdName', function () {
  before(function before(done) {
    proxy.create(done)
  })

  after(function after(done) {
    proxy.destroy(done)
  })

  it('Commands.giveOsdName should exist', function () {
    expect(Commands.giveOsdName).toExist('Commands.giveOsdName is not defined')
  })

  it('Handlers.setOsdName should exist', function () {
    expect(Handlers.setOsdName).toExist('Handlers.setOsdName is not defined')
  })

  it('Commands.giveOsdName should get a Handlers.setOsdName response', function (done) {
    proxy.target.on('SET_OSD_NAME', (packet) => {
      let args = packet.args
      let source = packet.source
      if (source === LogicalAddress.AUDIOSYSTEM && args) {
        let osdName = String.fromCharCode.apply(String, args)
        expect(osdName).toBe('RECEIVER')
        done()
      }
    })
    proxy.target.giveOsdName(LogicalAddress.AUDIOSYSTEM)
  })
})
