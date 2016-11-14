import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Carousel } from '../lib/index.js'

class App extends Component {
  constructor(props) {
    super(props)

    const window_width = document.body.offsetWidth

    this.state = {
      window_width: document.body.offsetWidth,
      window_size: 100,
      urls: [
        `http://placehold.it/${window_width-100}x200`,
        `http://placehold.it/${window_width-300}x200`,
        `http://placehold.it/${window_width-200}x200`,
        `http://placehold.it/${window_width-100}x200`,
        `http://placehold.it/${window_width-50}x200`,
        `http://placehold.it/${window_width-500}x200`,
        `http://placehold.it/${window_width-30}x200`
      ]
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        window_width: document.body.offsetWidth
      })
    })
  }

  render() {
    const example_wrapper_style = {
      position: 'relative',
      width: this.state.window_width * (this.state.window_size / 100),
      margin: '0 auto'
    }
    return (
      <div>
        <div
          id='carousel-wrapper'
          style={ example_wrapper_style }>
          <Carousel
            urls={ this.state.urls }
            use_arrow={ true }
            use_thumbs={ true }
            lazy_load={ true }
            styleEase='ease-in-out'
            use_left_arrow={<div> Left </div>}
            use_right_arrow={<div> Right </div>}
            options={ {
              listWidth: this.state.window_width * (this.state.window_size / 100),
              listHeight: 200
            } }
            beforeWrapperMouseOver={ (index, url) => console.log(index, url) }
            afterWrapperMouseOver={ (index, url) => console.log(index, url) }
            beforeWrapperMouseLeave={ (index, url) => console.log(index, url) }
            afterWrapperMouseLeave={ (index, url) => console.log(index, url) }
            beforeActionIDChange={ (preId) => console.log(preId) }
            afterActionIDChange={ (nextId) => console.log(nextId) }
          />
        </div>
        <div>
          <input
            type='range'
            onChange={ (e) => {
              this.setState({
                window_size: e.target.value
              })
            } } />
            <button
              onClick={() => {
                this.setState({
                  urls: this.state.urls.concat(`http://placehold.it/${ Math.random() * 450 }x200`)
                })
              }}>new image</button>
            <button
              onClick={() => {
                if (this.state.urls.length < 2) return
                this.setState({
                  urls: this.state.urls.slice(0, this.state.urls.length - 1)
                })
              }}>remove image</button>
        </div>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('example-view'))
