'use strict'

const CECClient = require('./lib/CECClient')
const client = new CECClient('boom')

client.start()

client.giveCecVersion()
client.reportPowerStatus()