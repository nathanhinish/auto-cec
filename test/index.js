'use strict'

const path = require('path')
const glob = require('glob')

const commandTestSuites = glob.sync('commands/setOsdString.js', {cwd: __dirname})
const handlerTestSuites = glob.sync('handlers/setOsdString.js', {cwd: __dirname})

// const AFTER_TIMEOUT = 60000

describe('CECClient', () => {
  describe('Commands', function () {
    commandTestSuites.forEach((file) => {
      require(`./${file}`)
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

