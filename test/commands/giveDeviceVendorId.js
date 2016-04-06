'use strict'

const debug = require('debug')('cec:test:commands:giveDeviceVendorId')
const expect = require('expect')
const sinon = require('sinon')

const ClientProxy = require('../common/ClientProxy')

const CECClient = require('../../lib/CECClient')
const Commands = CECClient.Commands
const Opcode = CECClient.Opcode
const InverseOpcode = CECClient.InverseOpcode

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
    let callback = sinon.spy()
    proxy.target.on('DEVICE_VENDOR_ID', callback)
    proxy.target.giveDeviceVendorId()
    expect(callback.called).toBe(true)
  })

})
