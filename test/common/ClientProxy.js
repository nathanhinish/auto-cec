'use strict'

const CECClient = require('../../lib/CECClient')

function ClientProxy() {
  let client

  this.create = function create(done) {
    client = new CECClient('cec-tester')
    client.start(done)
  }

  this.destroy = function destroy(done) {
    client.stop(done)
    client = null
  }

  Object.defineProperty(this, 'target', {
    get() {
      return client
    }
  })
}

module.exports = ClientProxy
