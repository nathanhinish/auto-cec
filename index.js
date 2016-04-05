'use strict'

const NodeCec = require('node-cec').NodeCec
const CEC = require('node-cec').CEC

const cec = new NodeCec('monitor')

cec.once( 'ready', ( client ) => {
  console.log(' -- READY -- ')
  client.sendCommand( 0xf0, CEC.Opcode.GIVE_DEVICE_POWER_STATUS )
})

// events from: http://www.cec-o-matic.com/
cec.on( 'REPORT_POWER_STATUS', (packet, status) => {
  for {power_status_name, power_status} of CEC.PowerStatus) {
    if (power_status === status)
      console.log(`POWER_STATUS: ${power_status_name}`)
      break
    }
})

cec.on( 'ROUTING_CHANGE', (packet, fromSource, toSource) => {
  console.log(`Routing changed from ${fromSource} to ${toSource}.`)
)

cec.start( 'cec-client', '-m', '-d', '8', '-b', 'r' )
