'use strict'

const CECClient = require('./lib/CECClient')
const client = new CECClient('boom')

client.start()

console.info(client)

client.giveCecVersion()
client.reportPowerStatus()