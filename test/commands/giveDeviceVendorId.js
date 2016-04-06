'use strict'

const debug = require('debug')('cec:test:deviceVendorId')
const expect = require('expect')

const ClientProxy = require('../common/ClientProxy')

const CECClient = require('../../lib/CECClient')
const Commands = CECClient.Commands
const Handlers = CECClient.Handlers

const proxy = new ClientProxy()

describe('Commands.giveDeviceVendorId & Handlers.deviceVendorId', function () {
  before(function before(done) {
    proxy.create(done)
  })

  after(function after(done) {
    proxy.destroy(done)
  })

  it('should exist', function () {
    expect(Commands.giveDeviceVendorId).toExist('Commands.giveDeviceVendorId is not defined')
  })

  it('Commands.giveDeviceVendorId should exist', function () {
    expect(Commands.giveDeviceVendorId).toExist('Commands.giveDeviceVendorId is not defined')
  })

  it('Handlers.deviceVendorId should exist', function () {
    expect(Handlers.deviceVendorId).toExist('Handlers.deviceVendorId is not defined')
  })

  it('Commands.giveDeviceVendorId should get a Handlers.deviceVendorId response', function (done) {
    proxy.target.on('DEVICE_VENDOR_ID', () => done())
    proxy.target.giveDeviceVendorId()
  })
})
