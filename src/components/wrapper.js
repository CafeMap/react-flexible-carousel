import React, { Component } from 'react'

class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const children_count = React.Children.count(this.props.children)
    const children = React.Children.map(this.props.children, (children_list) => {
      return children_list
    })
    const inner_wrapper_style = {
      width: this.props.listWidth,
      height: this.props.listHeight,
      overflow: 'hidden',
      backgroundColor: 'white'
    }
    const children_style = {
      width: Math.ceil(parseInt(this.props.listWidth, 10) * children_count),
      height: this.props.listHeight,
      transition: `transform .3s ${ this.props.styleEase ? this.props.styleEase : 'ease-out' }`,
      transform: `translateX(-${Math.ceil(parseInt(this.props.listWidth, 10) * this.props.actionID)}px)`
    }
    return (
      <div
        style={ inner_wrapper_style }
        onMouseOver={ this.props.onWrapperMouseOver }
        onMouseLeave={ this.props.onWrapperMouseLeave }>
        <div
        style={ children_style }>
          { children }
        </div>
      </div>
    )
  }
}

export default Wrapper
