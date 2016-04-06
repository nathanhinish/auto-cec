'use strict'

const debug = require('debug')('cec:test:commands:giveDeviceVendorId')
const expect = require('expect')

const ClientProxy = require('../common/ClientProxy')

const CECClient = require('../../lib/CECClient')
const Commands = CECClient.Commands

const proxy = new ClientProxy()

describe('#giveDeviceVendorId', function () {
  before(function before(done) {
    proxy.create(done)
  })

  after(function after(done) {
    proxy.destroy(done)
  })

  it('should exist', function () {
    expect(Commands.giveDeviceVendorId).toExist('Commands.giveDeviceVendorId is not defined')
  })

  it('should get response', function (done) {
    proxy.target.on('DEVICE_VENDOR_ID', () => done())
    proxy.target.giveDeviceVendorId()
  })
})
