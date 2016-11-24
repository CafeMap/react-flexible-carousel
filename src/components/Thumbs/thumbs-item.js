import React, { Component } from 'react'

class ThumbsItem extends Component {
  render() {
    const _thumbs_item_style = Object.assign({
      float: 'left',
      width: this.props.width,
      height: 60,
      backgroundImage: `url(${this.props.url})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      opacity: this.props.isAction ? 1 : 0.3
    }, this.props.thumbs_item_style)
    return (
      <div
        ref={ node => this.item = node } /* eslint no-return-assign: 0 */
        style={ _thumbs_item_style }
        onClick={ () => this.props.handleChangeThumbsID(this.props.idx) }>{null}</div>
    )
  }
}

export default ThumbsItem
