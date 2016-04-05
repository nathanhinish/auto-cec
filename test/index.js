'use strict'

const CECClient = require('../lib/CECClient')
const client = new CECClient('cec-tester')

client.start()

client.getCecVersion()
client.reportPowerStatus()

// F0:64:00:48:65:6C:6C:6F:20:77:6F:72:6C:64
let chars = 'Hello world'.split('').map((c) => {
  return c.charCodeAt(0)
})
console.info(chars.map((c) => {
  return c.toString(16).toUpperCase()
}).join(':'))
client.setOsdString(null, chars)

