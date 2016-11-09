import React, { Component } from 'react'

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={ {
        width: this.props.width,
        height: this.props.height,
        float: 'left',
        backgroundImage: `url(${this.props.url})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain'
      } }></div>
    )
  }
}

export default List
