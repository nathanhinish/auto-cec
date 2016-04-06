'use strict'

const glob = require('glob')

const commandTestSuites = glob.sync('commands/*.js', {cwd: __dirname})
const handlerTestSuites = glob.sync('handlers/*.js', {cwd: __dirname})

// const AFTER_TIMEOUT = 60000

describe('CECClient', () => {
  commandTestSuites.forEach((file) => require(`./${file}`))
  handlerTestSuites.forEach((file) => require(`./${file}`))

  describe('util', function () {
    require('./util/reduceArgsBytes')
  })
})

