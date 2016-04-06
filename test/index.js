'use strict'

const keys = require('lodash/keys')
const commandTests = require('require-dir')('./commands')
const handlerTests = require('require-dir')('./handlers')

const CECClient = require('../lib/CECClient')

const commandKeys = keys(commandTests)
const handlerKeys = keys(handlerTests)

describe('CECClient', () => {
  let client

  beforeEach(function(done) {
    client = new CECClient('cec-tester')
    // client.cec.once('ready', done)
    // client.start()
    done()
  })

  afterEach(function(done) {
    // client.close(done)
    done()
  })

  describe('Commands', function () {
    commandKeys.forEach((key) => {
      describe(`Commands#${key}`, function () {
        commandTests[key](client)
      })
    })
  })

  describe('Handlers', function () {
    handlerKeys.forEach((key) => {
      describe(`Handlers#${key}`, function () {
        handlerTests[key](client)
      })
    })
  })
})

