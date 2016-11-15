import React, { Component } from 'react'

class Wrapper extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      is_touched: false,
      start_x: 0,
      move_x: 0
    }
  }

  _handleTouchStart(e) {
    this.setState({
      start_x: e.nativeEvent.changedTouches[0]['clientX'],
      move_x: e.nativeEvent.changedTouches[0]['clientX'],
      is_touched: true
    })
  }

  _handleTouchMove(e) {
    this.setState({
      move_x: e.nativeEvent.changedTouches[0]['clientX']
    })
  }

  _handleTouchEnd(e) {
    const _correctX = this.state.start_x - this.state.move_x
    this.props.handleTouchChangeActionID(_correctX)
    this.setState({
      start_x:0,
      move_x:0,
      is_touched: false
    })
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
      transition: this.state.is_touched ? 'none' : `transform .3s ${ this.props.styleEase ? this.props.styleEase : 'ease-out' }`,
      transform: `translateX(-${Math.ceil(parseInt(this.props.listWidth, 10) * this.props.actionID) + (this.state.start_x - this.state.move_x)}px)`
    }
    const touch_bind = this.props.touch_mode ? {
      onTouchStart: this._handleTouchStart.bind(this),
      onTouchMove: this._handleTouchMove.bind(this),
      onTouchEnd: this._handleTouchEnd.bind(this)
    } : {}
    return (
      <div
        style={ inner_wrapper_style }
        onMouseOver={ this.props.onWrapperMouseOver }
        onMouseLeave={ this.props.onWrapperMouseLeave }
        { ...touch_bind } >
        <div
        style={ children_style }>
          { children }
        </div>
      </div>
    )
  }
}

export default Wrapper
