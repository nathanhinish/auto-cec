'use strict'

const expect = require('expect')
const sinon = require('sinon')

const ClientProxy = require('../common/ClientProxy')

const Commands = require('../../lib/CECClient').Commands

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

  it('should get response', function(done) {
    this.timeout(6000)
    proxy.target.on('packet', function (packet) {
      console.info('PACKET', JSON.stringify(packet))
      setTimeout(() => {
        expect(1).toBe(1)
        done()
      }, 5000)
    })

    proxy.target.giveDeviceVendorId()
  })

})
