/* eslint global-require: 0 */
/* eslint no-return-assign: 0 */
/* eslint react/prefer-stateless-function: 0 */
/* eslint react/no-string-refs: 0 */
import React, { Component } from 'react'
import { shallow } from 'enzyme'

class Foo extends Component {
  render() {
    return (
      <div>Hello World</div>
    )
  }
}

describe('Validate Type Test', () => {
  let reactElement
  let validateType
  beforeEach(() => {
    reactElement = shallow(<Foo />)
    validateType = require('../../src/util/validateType')
  })
  test('require is module', () => {
    expect(validateType.__esModule).toBeTruthy()
  })
  test('is function', () => {
    const myfn = () => {}
    const mystr = 'Hello'
    expect(validateType.isFunction(myfn)).toBeTruthy()
    expect(validateType.isFunction(mystr)).toBeFalsy()
  })
  test('is react element from real react element', () => {
    expect(validateType.isReactElement(reactElement.node)).toBeTruthy()
  })
  test('is react element from stateless function', () => {
    const elementfn = () => (
      <div>Hello Element</div>
    )
    expect(validateType.isReactElement(elementfn())).toBeTruthy()
  })
})
