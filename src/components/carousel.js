import React, { Component } from 'react'
import { getDOMWidth } from '../util/findDOMNode'

import Wrapper from './wrapper'
import Thumbs from './Thumbs/thumbs'
import List from './list'
import { ArrowLeft, ArrowRight } from './Arrow/arrow'

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        listWidth: Math.ceil(this.props.options.listWidth) || 300,
        listHeight: this.props.options.listHeight || 400
      },
      wrapperIsHover: false,
      actionID: 0
    }
  }

  componentDidMount() {
    const auto_play_speed = this.props.options.auto_play_speed ? this.props.options.auto_play_speed : 1000
    if (this.props.auto_play && !this.timer) {
      this.timer = setInterval(this._handleAutoPlay.bind(this), auto_play_speed)
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.urls !== this.props.urls ||
      nextState.actionID !== this.state.actionID ||
      nextState.wrapperIsHover !== this.state.wrapperIsHover
  }

  _handleAutoPlay() {
    if (this.state.wrapperIsHover) return
    if (this.state.actionID + 1 >= this.props.urls.length) {
      this.setState({
        actionID: 0
      })
    } else {
      this.setState({
        actionID: this.state.actionID + 1
      })
    }
  }

  _handleWrapperMouseOver() {
    if (this.props.beforeWrapperMouseOver) {
      this.props.beforeWrapperMouseOver()
    }
    this.setState({
      wrapperIsHover: true
    }, () => {
      if (this.props.afterWrapperMouseOver) {
        this.props.afterWrapperMouseOver()
      }
    })
  }

  _handleWrapperMouseLeave() {
    if (this.props.beforeWrapperMouseLeave) {
      this.props.beforeWrapperMouseLeave()
    }
    this.setState({
      wrapperIsHover: false
    }, () => {
      if (this.props.afterWrapperMouseLeave) {
        this.props.afterWrapperMouseLeave()
      }
    })
  }

  _handleArrowLeft() {
    if (this.state.actionID - 1 < 0) return
    this.setState({
      actionID: this.state.actionID - 1
    })
  }

  _handleArrowRight() {
    if (this.state.actionID + 1 >= this.props.urls.length) return
    this.setState({
      actionID: this.state.actionID + 1
    })
  }

  _handleChangeThumbsID(id) {
    this.setState({
      actionID: id
    })
  }

  renderList() {
    const _use_lazy_load = this.props.lazy_load
    return this.props.urls.map((url, idx) => {
      return <List
        width={ Math.ceil(this.props.options.listWidth) }
        height={ this.state.options.listHeight }
        key={ `cm-carousel-list-${url}` }
        idx={ idx }
        url={ _use_lazy_load ? (idx === (this.state.actionID - 1) || idx === (this.state.actionID + 1) || idx === (this.state.actionID) ? url : '') : url } />
    })
  }

  render() {
    const _wrapper_style = {
      position: 'relative'
    }
    const _render_arrow = () => {
      if (this.props.use_arrow) {
        return (
          [
            <ArrowLeft
              wrapperIsHover={ this.state.wrapperIsHover }
              handleArrowLeft={ this._handleArrowLeft.bind(this) } />,
            <ArrowRight
              wrapperIsHover={ this.state.wrapperIsHover }
              handleArrowRight={ this._handleArrowRight.bind(this) } />
          ]
        )
      }
    }
    const _render_thumbs = () => {
      if (this.props.use_thumbs) {
        return (
          <Thumbs
            actionID={ this.state.actionID }
            listWidth={ Math.ceil(this.props.options.listWidth) }
            urls={ this.props.urls }
            handleChangeThumbsID={ this._handleChangeThumbsID.bind(this) } />
        )
      }
    }
    return (
      <div
        style={ _wrapper_style }>
        <Wrapper
          ref={ node => this.wrapper = node }
          listWidth={ Math.ceil(this.props.options.listWidth) }
          listHeight={ this.state.options.listHeight }
          actionID={ this.state.actionID }
          styleEase={ this.props.styleEase }
          onWrapperMouseOver={ this._handleWrapperMouseOver.bind(this) }
          onWrapperMouseLeave={ this._handleWrapperMouseLeave.bind(this) }>
          { this.renderList.call(this) }
        </Wrapper>
        { _render_arrow() }
        { _render_thumbs() }
      </div>
    )
  }
}

export default Carousel
