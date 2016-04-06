'use strict'

const keys = require('lodash/keys')
const commandTests = require('require-dir')('./commands')
const handlerTests = require('require-dir')('./handlers')

const CECClient = require('../lib/CECClient')

const commandKeys = keys(commandTests)
const handlerKeys = keys(handlerTests)

const AFTER_TIMEOUT = 60000

describe('CECClient', () => {
  let client

  before(function before(done) {
    client = new CECClient('cec-tester')
    client.start(done)
  })

  after(function after(done) {
    client.stop(done)
  })

  describe('Commands', function () {
    describe('Commands#setOsdString', function () {
      commandTests.setOsdString(client)
    })
  })

  // describe('Commands', function () {
  //   commandKeys.forEach((key) => {
  //     describe(`Commands#${key}`, function () {
  //       commandTests[key](client)
  //     })
  //   })
  // })

  // describe('Handlers', function () {
  //   handlerKeys.forEach((key) => {
  //     describe(`Handlers#${key}`, function () {
  //       handlerTests[key](client)
  //     })
  //   })
  // })
})

