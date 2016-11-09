import React, { Component } from 'react'

class ThumbsItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={ {
          float: 'left',
          width: this.props.width,
          height: 60,
          backgroundImage: `url(${this.props.url})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          opacity: this.props.isAction ? 1 : 0.3,
        } }
        onClick={ () => this.props.handleChangeThumbsID(this.props.idx) }></div>
    )
  }
}

export default ThumbsItem
