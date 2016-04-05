'use strict'

const CEC = require('node-cec').CEC
const VendorId = CEC.VendorId
const LogicalAddress = CEC.LogicalAddress

const getKeyFromValue = require('../util/getKeyFromValue')
const reduceArgsBytes = require('../util/reduceArgsBytes')

module.exports = function deviceVendorId(packet) {
  let type = getKeyFromValue(LogicalAddress, parseInt(packet.source, 16))
  let vendorId = reduceArgsBytes(packet.args)
  let vendor = getKeyFromValue(VendorId, vendorId)

  let devices = this.devices
  if (!devices) {
    this.devices = devices = {}
  }
  devices[type] = {
    vendor: {
      id: vendorId,
      name: vendor
    }
  }

  console.info(`A ${vendor} (0x${vendorId.toString(this.SHIFTER)}) ${type} was reported.`)
}
