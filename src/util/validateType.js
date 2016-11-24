import React from 'react'

function isReactElement(element) {
  if (typeof element === 'function') {
    return typeof element.prototype.render === 'function'
  }

  if (React.isValidElement(element)) {
    return true
  }

  return false
}

function isFunction(fn) {
  if (typeof fn === 'function') {
    return true
  }

  return false
}

export {
  isFunction,
  isReactElement
}
