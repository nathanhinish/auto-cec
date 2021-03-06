'use strict'

const debug = require('debug')('cec:handler:DEVICE_VENDOR_ID')
const CEC = require('node-cec').CEC
const VendorId = CEC.VendorId
const LogicalAddress = CEC.LogicalAddress

const getKeyFromValue = require('../util/getKeyFromValue')
const reduceArgsBytes = require('../util/reduceArgsBytes')

module.exports = function deviceVendorId(packet) {
  let type = getKeyFromValue(LogicalAddress, packet.source)
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

  debug(`A ${vendor} (0x${vendorId.toString(this.SHIFTER)}) ${type} was reported.`)
  this.emit('DEVICE_VENDOR_ID', packet)
}
