'use strict'

const CECClient = require('../lib/CECClient')
const client = new CECClient('cec-tester')

client.start()
client.getCecVersion()
client.reportPowerStatus()
