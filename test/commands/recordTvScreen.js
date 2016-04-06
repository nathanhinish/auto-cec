'use strict'

const debug = require('debug')('cec:test:recordTvScreen')
const expect = require('expect')
const sinon = require('sinon')

const ClientProxy = require('../common/ClientProxy')

const Commands = require('../../lib/CECClient').Commands

const proxy = new ClientProxy()

describe.only('#recordTvScreen', function() {

  before(function before(done) {
    proxy.create(done)
  })

  after(function after(done) {
    proxy.destroy(done)
  })

  it('should exist', function() {
    expect(Commands.recordTvScreen).toExist('Commands.recordTvScreen is not defined')
  })

  it('TV response', function (done) {
    this.timeout(10000)
    proxy.target.on('packet', (packet) => {
      debug(JSON.stringify(packet))
    })
    setTimeout(done, 9000)
    proxy.target.recordTvScreen(5)
  })

})
