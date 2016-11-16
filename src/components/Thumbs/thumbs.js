import React, { Component } from 'react'
import ThumbsItem from './thumbs-item'

class Thumbs extends Component {
  constructor(props) {
    super(props);
  }

  _render_thumbs_items(thumbs_item_style) {
    const thumbs_per_page = this.props.thumbsPerPage || 5
    return this.props.urls.map((url, idx) => {
      const isAction = idx === this.props.actionID
      return (
        <ThumbsItem
          key={ `thumbs-item-${url}-${idx}` }
          thumbs_item_style={ thumbs_item_style }
          isAction={ isAction }
          width={ this.props.listWidth / thumbs_per_page }
          url={ url }
          idx={ idx }
          handleChangeThumbsID={ this.props.handleChangeThumbsID } />
      )
    })
  }

  render() {
    const _wrapper_width = Math.ceil(parseInt(this.props.listWidth, 10) * this.props.urls.length)
    const thumbs_per_page = this.props.thumbsPerPage || 5
    const thumbs_wrapper_style = Object.assign({
      width: this.props.listWidth,
      overflow: 'hidden',
      backgroundColor: 'white',
      borderRadius: '0px 0px 3px 3px'
    }, this.props.thumbs_style)
    const thumbs_item_style = {
      width: _wrapper_width,
      transition: 'transform .3s',
      transform: this.props.actionID > (thumbs_per_page - 2) ? `translateX(-${Math.ceil(parseInt(this.props.listWidth / thumbs_per_page, 10) * (this.props.actionID - (thumbs_per_page - 2)))}px)` : `translateX(0px)`
    }
    return (
      <div
        style={ thumbs_wrapper_style }>
        <div
          style={ thumbs_item_style }>
          { this._render_thumbs_items.call(this, this.props.thumbs_item_style) }
        </div>
      </div>
    )
  }
}

export default Thumbs
