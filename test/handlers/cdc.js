'use strict'

const expect = require('expect')
const sinon = require('sinon')

const ClientProxy = require('../common/ClientProxy')

const Handlers = require('../../lib/CECClient').Handlers

const proxy = new ClientProxy()

describe('#cdc', function() {

  before(function before(done) {
    proxy.create(done)
  })

  after(function after(done) {
    proxy.destroy(done)
  })

  it('should exist', function() {
    expect(Handlers.cdc).toExist('Handlers.cdc is not defined')
  })

})
