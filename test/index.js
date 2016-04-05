'use strict'

const snakeCase = require('lodash/snakeCase')
const CECClient = require('../lib/CECClient')
const client = new CECClient('cec-tester')

const TEST_DELAY = 5000

client.start()

// client.getCecVersion()
// client.reportPowerStatus()

function testSetOsdString() {
  console.info(`testing ${snakeCase('setOsdString')} command`)
  // F0:64:00:48:65:6C:6C:6F:20:77:6F:72:6C:64
  let chars = 'Hello world'.split('').map((c) => {
    return c.charCodeAt(0)
  })
  console.info(chars.map((c) => {
    return c.toString(16).toUpperCase()
  }).join(':'))
  client.setOsdString(CECClient.LogicalAddress.TV, chars)
}

client.cec.on('ready', testSetOsdString)

