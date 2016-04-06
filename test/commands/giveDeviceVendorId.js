'use strict'

const debug = require('debug')('cec:test:deviceVendorId')
const expect = require('expect')

const ClientProxy = require('../common/ClientProxy')

const CECClient = require('../../lib/CECClient')
const Commands = CECClient.Commands
const Handlers = CECClient.Handlers

const proxy = new ClientProxy()

describe.only('Commands.giveDeviceVendorId & Handlers.deviceVendorId', function () {
  before(function before(done) {
    proxy.create(done)
  })

  after(function after(done) {
    proxy.destroy(done)
  })

  it('command should exist', function () {
    expect(Commands.giveDeviceVendorId).toExist('Commands.giveDeviceVendorId is not defined')
  })

  it('handler should exist', function () {
    expect(Handlers.deviceVendorId).toExist('Handlers.deviceVendorId is not defined')
  })

  it('AUDIOSYSTEM response', function (done) {
    proxy.target.on('DEVICE_VENDOR_ID', () => done())
    proxy.target.giveDeviceVendorId(5)
  })

  it('TV response', function (done) {
    proxy.target.on('DEVICE_VENDOR_ID', () => done())
    proxy.target.giveDeviceVendorId(0)
  })
})
