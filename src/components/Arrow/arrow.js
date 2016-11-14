import React, { Component } from 'react'
import { isReactElement } from '../../util/validateType'

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
    console.log(this.props.wrapperHeight)
    const _left_arrow_style = {
      left: 0,
      fontSize: 30,
      color: 'black',
      position: 'absolute',
      top: this.props.wrapperHeight / 2,
      cursor: 'default',
      userSelect: 'none',
      transition: 'opacity .3s',
      opacity: this.props.wrapperIsHover || this.state.isArrowHover ? 1 : 0
    }
    if (this.props.useLeftArrow) {
      if (isReactElement(this.props.useLeftArrow, 'useLeftArrow')) {
        const cloneProps = {
          style: _left_arrow_style,
          onClick: this.props.handleArrowLeft,
          onMouseOver: this.handleArrowMouseOver.bind(this),
          onMouseLeave: this.handleArrowMouseLeave.bind(this)
        }
        return React.cloneElement(this.props.useLeftArrow, cloneProps)
      }
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
      top: this.props.wrapperHeight / 2,
      cursor: 'default',
      userSelect: 'none',
      transition: 'opacity .3s',
      opacity: this.props.wrapperIsHover || this.state.isArrowHover ? 1 : 0
    }
    if (this.props.useRightArrow) {
      if (isReactElement(this.props.useRightArrow, 'useRightArrow')) {
        const cloneProps = {
          style: _right_arrow_style,
          onClick: this.props.handleArrowRight,
          onMouseOver: this.handleArrowMouseOver.bind(this),
          onMouseLeave: this.handleArrowMouseLeave.bind(this)
        }
        return React.cloneElement(this.props.useRightArrow, cloneProps)
      }
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
