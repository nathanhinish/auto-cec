'use strict'

const CEC = require('node-cec').CEC
const CECClient = require('../lib/CECClient')
const client = new CECClient('cec-tester')

client.start()

client.getCecVersion()
client.reportPowerStatus()

// F0:64:00:48:65:6C:6C:6F:20:77:6F:72:6C:64
client.setOsdString(CEC.LogicalAddress.TV, 'Hello world'.split())

