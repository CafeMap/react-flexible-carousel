import React, { Component } from 'react'
import ThumbsItem from './thumbs-item'

class Thumbs extends Component {
  constructor(props) {
    super(props);
  }

  _render_thumbs_items() {
    return this.props.urls.map((url, idx) => {
      const isAction = idx === this.props.actionID
      return (
        <ThumbsItem
          key={ `thumbs-item-${url}` }
          isAction={ isAction }
          width={ this.props.listWidth / 5 }
          url={ this.props.actionID >= (idx - 4) ? url : '' }
          idx={ idx }
          handleChangeThumbsID={ this.props.handleChangeThumbsID } />
      )
    })
  }

  render() {
    const _wrapper_width = Math.ceil(parseInt(this.props.listWidth, 10) * this.props.urls.length)
    const thumbs_wrapper_style = {
      width: this.props.listWidth,
      overflow: 'hidden',
      backgroundColor: 'white',
      borderRadius: '0px 0px 3px 3px'
    }
    const thumbs_item_style = {
      width: _wrapper_width,
      transition: 'transform .3s',
      transform: this.props.actionID > 2 ? `translateX(-${Math.ceil(parseInt(this.props.listWidth / 5, 10) * (this.props.actionID - 2))}px)` : `translateX(0px)`
    }
    return (
      <div
        style={ thumbs_wrapper_style }>
        <div
          style={ thumbs_item_style }>
          { this._render_thumbs_items.call(this) }
        </div>
      </div>
    )
  }
}

export default Thumbs
