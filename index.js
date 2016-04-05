'use strict'

const NodeCec = require('node-cec').NodeCec
const CEC = require('node-cec').CEC

const cec = new NodeCec('monitor')

const CMD = 0xf0

cec.once('ready', (client) => {
  console.log(' -- READY -- ')
  client.sendCommand(CMD, CEC.Opcode.GIVE_DEVICE_POWER_STATUS)
})

// events from: http://www.cec-o-matic.com/
cec.on('REPORT_POWER_STATUS', (packet, status) => {
  for (let ps of CEC.PowerStatus) {
    let sName = ps.power_status_name
    let s = ps.power_status
    if (s === status) {
      console.log(`POWER_STATUS: ${sName}`)
      break
    }
  }
})

cec.on('ROUTING_CHANGE', (packet, fromSource, toSource) => {
  console.log(`Routing changed from ${fromSource} to ${toSource}.`)
})

cec.start('cec-client', '-m', '-d', '8', '-b', 'r')
