'use strict'

const path = require('path')
const fs = require('fs-extra')
const camelCase = require('lodash/camelCase')
const keys = require('lodash/keys')
const template = require('lodash/template')

const CEC = require('node-cec').CEC
const Opcode = CEC.Opcode
const OpcodeKeys = keys(Opcode)

const commandTpl = template(fs.readFileSync(path.join(__dirname, 'templates', 'command.js.tpl'), {encoding: 'utf8'}))
const handlerTpl = template(fs.readFileSync(path.join(__dirname, 'templates', 'handler.js.tpl'), {encoding: 'utf8'}))

fs.ensureDirSync(path.resolve('lib', 'commands'))
fs.ensureDirSync(path.resolve('lib', 'handlers'))

function writeFile(file, content) {
  fs.access(file, fs.F_OK, (accessError) => {
    if (accessError) {
      fs.writeFile(file, content, (writeError) => {
        console.log(file, writeError)
      })
    }
  })
}

OpcodeKeys.forEach((key) => {
  let camelName = camelCase(key)
  let data = {
    camel: camelName,
    original: key
  }
  writeFile(path.resolve('lib', 'commands', `${camelName}.js`), commandTpl(data))
  writeFile(path.resolve('lib', 'handlers', `${camelName}.js`), handlerTpl(data))
})
