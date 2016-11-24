import React, { Component } from 'react'

class List extends Component { /* eslint react/prefer-stateless-function: 0 */
  render() {
    const _list_style = Object.assign({
      width: this.props.width,
      height: this.props.height,
      float: 'left',
      backgroundImage: `url(${this.props.url})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'contain'
    }, this.props.carousel_list_style)
    return (
      <div style={ _list_style }>{null}</div>
    )
  }
}

export default List
