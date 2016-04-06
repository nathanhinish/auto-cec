'use strict'

const expect = require('expect')

const RECORDINGDEVICE1 = 1
const AUDIOSYSTEM = 5
const OUTPUT = 0x15

describe('generateSourceTarget', function () {
  const generateSourceTarget = require('../../lib/util/generateSourceTarget')
  it('should convert inputs to the correct value', function () {
    const value = generateSourceTarget(RECORDINGDEVICE1, AUDIOSYSTEM)
    expect(value).toBe(OUTPUT)
  })
})
