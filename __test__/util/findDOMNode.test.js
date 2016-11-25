/* eslint global-require: 0 */
/* eslint no-return-assign: 0 */
/* eslint react/prefer-stateless-function: 0 */
/* eslint react/no-string-refs: 0 */
import React, { Component } from 'react'
import { mount } from 'enzyme'

class Bar extends Component {
  render() {
    return (
      <div>Hello World</div>
    )
  }
}

describe('findDOMNode', () => {
  let findDOM
  let reactElement
  beforeEach(() => {
    findDOM = require('../../src/util/findDOMNode')
    reactElement = mount(<Bar />)
  })
  it('findDOMNode width = 0', () => {
    expect(findDOM.getDOMWidth(reactElement.find('div').at(0).node), 0)
  })
  it('findDOMNode height = 0', () => {
    expect(findDOM.getDOMHeight(reactElement.find('div').at(0).node), 0)
  })
  it('findDOMNode top = 0', () => {
    expect(findDOM.getDOMTop(reactElement.find('div').at(0).node), 0)
  })
  it('findDOMNode bottom = 0', () => {
    expect(findDOM.getDOMBottom(reactElement.find('div').at(0).node), 0)
  })
  it('findDOMNode left = 0', () => {
    expect(findDOM.getDOMLeft(reactElement.find('div').at(0).node), 0)
  })
  it('findDOMNode right = 0', () => {
    expect(findDOM.getDOMRight(reactElement.find('div').at(0).node), 0)
  })
})
