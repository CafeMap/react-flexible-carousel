import React, { Component } from 'react'

class ArrowLeft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isArrowHover: false
    }
  }

  handleArrowMouseOver() {
    this.setState({ isArrowHover: true })
  }

  handleArrowMouseLeave() {
    this.setState({ isArrowHover: false })
  }

  render() {
    const _left_arrow_style = {
      left: 0,
      fontSize: 30,
      color: 'black',
      position: 'absolute',
      top: '50%',
      transition: 'opacity .3s',
      opacity: this.props.wrapperIsHover || this.state.isArrowHover ? 1 : 0
    }
    return (
      <div
        style={ _left_arrow_style }
        onClick={ this.props.handleArrowLeft }
        onMouseOver={ this.handleArrowMouseOver.bind(this) }
        onMouseLeave={ this.handleArrowMouseLeave.bind(this) }
        ><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></div>
    )
  }
}

class ArrowRight extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isArrowHover: false
    }
  }

  handleArrowMouseOver() {
    this.setState({ isArrowHover: true })
  }

  handleArrowMouseLeave() {
    this.setState({ isArrowHover: false })
  }

  render() {
    const _right_arrow_style = {
      right: 0,
      fontSize: 30,
      color: 'black',
      position: 'absolute',
      top: '50%',
      transition: 'opacity .3s',
      opacity: this.props.wrapperIsHover || this.state.isArrowHover ? 1 : 0
    }
    return (
      <div
        style={ _right_arrow_style }
        onClick={ this.props.handleArrowRight }
        onMouseOver={ this.handleArrowMouseOver.bind(this) }
        onMouseLeave={ this.handleArrowMouseLeave.bind(this) }
        ><i className="fa fa-arrow-circle-right" aria-hidden="true"></i></div>
    )
  }
}

export {
  ArrowLeft,
  ArrowRight
}
