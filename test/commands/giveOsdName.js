'use strict'

const expect = require('expect')
const sinon = require('sinon')

const ClientProxy = require('../common/ClientProxy')

const Commands = require('../../lib/CECClient').Commands

const proxy = new ClientProxy()

describe('#giveOsdName', function() {

  before(function before(done) {
    proxy.create(done)
  })

  after(function after(done) {
    proxy.destroy(done)
  })

  it('should exist', function() {
    expect(Commands.giveOsdName).toExist('Commands.giveOsdName is not defined')
  })

  it('should get response', function(done) {
    proxy.target.on('packet', function (packet) {
      console.info(packet)
      setTimeout(done, 5000)
    })

    proxy.target.giveOsdName()
  })

})
