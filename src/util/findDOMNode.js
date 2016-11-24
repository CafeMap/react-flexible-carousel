/* eslint import/no-extraneous-dependencies: 0 */
/* eslint react/no-find-dom-node: 0 */
import ReactDom from 'react-dom'

function _getDOM(react_node) {
  return ReactDom.findDOMNode(react_node)
}

function _getRect(dom_node) {
  return dom_node.getBoundingClientRect()
}

function _getRectWidth(dom_node) {
  return dom_node.getBoundingClientRect().width
}

function _getRectHeight(dom_node) {
  return dom_node.getBoundingClientRect().height
}

function _getRectTop(dom_node) {
  return dom_node.getBoundingClientRect().top
}

function _getRectBottom(dom_node) {
  return dom_node.getBoundingClientRect().bottom
}

function _getRectLeft(dom_node) {
  return dom_node.getBoundingClientRect().left
}

function _getRectRight(dom_node) {
  return dom_node.getBoundingClientRect().right
}

const findDOMNode = node => _getDOM(node)
const getBoundingClientRect = node => _getRect(_getDOM(node))
const getDOMWidth = node => _getRectWidth(_getDOM(node))
const getDOMHeight = node => _getRectHeight(_getDOM(node))
const getDOMTop = node => _getRectTop(_getDOM(node))
const getDOMBottom = node => _getRectBottom(_getDOM(node))
const getDOMLeft = node => _getRectLeft(_getDOM(node))
const getDOMRight = node => _getRectRight(_getDOM(node))

export {
  findDOMNode,
  getBoundingClientRect,
  getDOMWidth,
  getDOMHeight,
  getDOMTop,
  getDOMBottom,
  getDOMLeft,
  getDOMRight
}
