'use strict'

const debug = require('debug')('cec:test:commands:giveDeviceVendorId')
const expect = require('expect')
const sinon = require('sinon')

const ClientProxy = require('../common/ClientProxy')

const CECClient = require('../../lib/CECClient')
const Commands = CECClient.Commands
const Opcode = CECClient.Opcode
const InverseOpcode = CECClient.InverseOpcode

debug(InverseOpcode)

const proxy = new ClientProxy()

describe.only('#giveDeviceVendorId', function() {

  before(function before(done) {
    proxy.create(done)
  })

  after(function after(done) {
    proxy.destroy(done)
  })

  it('should exist', function() {
    expect(Commands.giveDeviceVendorId).toExist('Commands.giveDeviceVendorId is not defined')
  })

  it('should get response', function (done) {
    this.timeout(6000)
    proxy.target.on('packet', function (packet) {
      debug('PACKET', JSON.stringify(packet))
    })

    proxy.target.on(InverseOpcode.DEVICE_VENDOR_ID, function (packet) {
      debug('DEVICE_VENDOR_ID', this, JSON.stringify(packet))
      setTimeout(() => {
        expect(1).toBe(1)
        done()
      }, 5000)
    })
    global.c = proxy.target

    proxy.target.giveDeviceVendorId()
  })

})
