'use strict'

const expect = require('expect')
const sinon = require('sinon')

const ClientProxy = require('../common/ClientProxy')

const Commands = require('../../lib/CECClient').Commands

const proxy = new ClientProxy()

describe('#cdc', function() {

  before(function before(done) {
    proxy.create(done)
  })

  after(function after(done) {
    proxy.destroy(done)
  })

  it('should exist', function() {
    expect(Commands.cdc).toExist('Commands.cdc is not defined')
  })

})
