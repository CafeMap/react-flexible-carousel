import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Carousel } from '../lib/index.js'

const urls = [
  'http://placehold.it/350x200',
  'http://placehold.it/350x200',
  'http://placehold.it/350x200',
  'http://placehold.it/350x200']

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const _example_wrapper_style = {
      width: '80%'
    }
    return (
      <div
        style={ _example_wrapper_style }>
        <Carousel
          urls={ urls }
          use_arrow={ true }
          use_thumbs={ true }
          lazy_load={ true }
          styleEase='ease-in-out'
          use_left_arrow={<div>Left</div>}
          use_right_arrow={<div>Right</div>}
          options={ {
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
    )
  }
}

ReactDom.render(<App />, document.getElementById('example-view'))
