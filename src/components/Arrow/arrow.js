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
        ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA8klEQVRoQ+3XQQrCQBQE0c7J1JOrN5MB1zFCV30CmXUIeV3ZzJaTn+3k358LMF3QKnBP8tzBvpOsZ/4+FuCV5LbzdY8k65m/jwHA1l9aA4CtbwDQ9Q0Auj4NwNenAfj6JEBZnwQo61MAbX0KoK1PANT1CYC6fhugr98G6Os3ASPrNwEj67cAY+u3AGPrX4DvBfbXL7QKrTsvclpXyrHfqAUYq9ACrN9jpEITMFKhCRip0AboFdoAvQIBUCsQALUCBdAqUACtAglQKpAApQINwCvQALyCAUArGAC0ggXAKlgA5DrZutRjH3fkxVeBIyuRz3wAEydQMTmQm2EAAAAASUVORK5CYII=" width="48" height="48" /></div>
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
      ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA9ElEQVRoQ+3XSwrCQBgE4c7J1JOrN5NZC/FBV/0GnLWG+bqyyZaDn+3g988fMF2wUeCW5LQDuSRZv0FOA3BOct253br8QiCnAVgXG6vQAoxVaAHGKjQBIxWagJEKbYBeoQ3QKxAAtQIBUCtQAK0CBdAqkAClAglQKtAAvAINwCsYALSCAUArWACswq8A7kkW8uNjAbBPTgPw6vX5ev2VywBg6xsAdH0DgK5PA/D1aQC+PglQ1icByvoUQFufAmjrEwB1fQKgrt8G6Ou3Afr6TcDI+k3AyPotwNj6LcDY+i3Ax9+xzT8YX2TN+z496w9A533j4Q8TJ1AxjLrO4wAAAABJRU5ErkJggg==" width="48" height="48" /></div>
    )
  }
}

export {
  ArrowLeft,
  ArrowRight
}
