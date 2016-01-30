import fs from 'fs'
import assert from 'assert'
import {transformFileSync} from 'babel-core'

function test(name, dir, externalHelpers) {
  it(`should compile ${ name }`, () => {
    let plugins = ['../src']
    if (externalHelpers) {
      plugins.push('external-helpers-2')
    }
    let actual = transformFileSync(`./test/fixtures/${ dir }/actual.js`, {
      presets: ['es2015'],
      plugins: plugins
    }).code
    let expected = fs.readFileSync(`./test/fixtures/${ dir }/expected.js`, 'utf8').toString()
    // get rid of newline at the end of the file
    assert.equal(actual, expected.trim())
  })
}

describe('extensible-destructuring', () => {

  test('destructuring in for-in', 'for-in', true)

})
