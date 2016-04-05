'use strict'

const CEC = require('node-cec').CEC
const CECClient = require('../lib/CECClient')
const client = new CECClient('cec-tester')

client.start()

client.getCecVersion()
client.reportPowerStatus()

// F0:64:00:48:65:6C:6C:6F:20:77:6F:72:6C:64
let chars = 'Hello world'.split().map((c) => {
  return c.charCodeAt(0)
})
client.setOsdString(null, chars)

