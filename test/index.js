'use strict'

const keys = require('lodash/keys')
const commandTests = require('require-dir')('./commands')
const handlerTests = require('require-dir')('./handlers')

const CECClient = require('../lib/CECClient')

const commandKeys = keys(commandTests)
const handlerKeys = keys(handlerTests)

const AFTER_TIMEOUT = 60000

let client

describe('CECClient', () => {
  before((done) => {
    client = new CECClient('cec-tester')
    client.start(done)
    console.info('before', client)
  })

  after((done) => {
    client.stop(done)
    client = null
    console.info('after', client)
  })

  describe('Commands', function () {
    console.info('test', client)
    describe('Commands#setOsdString', function () {
      console.info('test 2', client)
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

