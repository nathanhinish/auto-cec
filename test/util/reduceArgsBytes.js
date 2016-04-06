'use strict'

const expect = require('expect')

const PIONEER_ID_DEC = 57398

describe('reduceArgsBytes', function () {
  const reduceArgsBytes = require('../../lib/util/reduceArgsBytes')
  it('should convert array of strings to the correct value for Pioneer', function () {
    const bytes = ['00','e0','36']
    const value = reduceArgsBytes(bytes)
    expect(value).toBe(PIONEER_ID_DEC)
  })

  it('should convert array of numbers to the correct value for Pioneer', function () {
    const bytes = [0x00, 0xe0, 0x36] // eslint-disable-line
    const value = reduceArgsBytes(bytes)
    expect(value).toBe(PIONEER_ID_DEC)
  })
})
