function _type_error(name, type, error_item) {
  throw new Error(`${name} seems ${error_item} typeof ${typeof error_item} didn't typeof ${type}`)
}

function isFunction(fn, callback_name) {
  if (typeof fn === 'function') {
    return true
  }
  _type_error(callback_name, 'function', fn)
}

export {
  isFunction
}
