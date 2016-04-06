'use strict'

const debug = require('debug')('cec:test:commands:giveOsdName')
const expect = require('expect')

const ClientProxy = require('../common/ClientProxy')

const CECClient = require('../../lib/CECClient')
const Commands = CECClient.Commands
const LogicalAddress = CECClient.LogicalAddress

const proxy = new ClientProxy()

describe('#giveOsdName', function () {
  before(function before(done) {
    proxy.create(done)
  })

  after(function after(done) {
    proxy.destroy(done)
  })

  it('should exist', function () {
    expect(Commands.giveOsdName).toExist('Commands.giveOsdName is not defined')
  })

  it('should get response', function (done) {
    proxy.target.on('SET_OSD_NAME', (packet) => {
      let args = packet.args
      debug(JSON.stringify(packet))
      if (args) {
        debug(String.fromCharCode.apply(String, args))
      }
      done()
    })
    proxy.target.giveOsdName(LogicalAddress.AUDIOSYSTEM)
  })
})
