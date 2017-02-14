import React, { Component } from 'react'
import { Carousel } from '../lib/index.js'

class SimpleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [
        'http://images.freeimages.com/images/previews/a6c/window-7-1547198.jpg',
        'http://images.freeimages.com/images/previews/5f7/hunter-s-bend-1316926.jpg',
        'http://images.freeimages.com/images/previews/423/burger-1320282.jpg',
        'http://images.freeimages.com/images/previews/f44/strawberry-cake-2-1323179.jpg',
        'http://images.freeimages.com/images/previews/5b0/rubik-s-cube-1-1424892.jpg',
      ]
    }
  }

  render() {
    return (
      <div style={{ width: 300, margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center' }}>Simple Example</h1>
        <Carousel
          urls={ this.state.urls }
          use_thumbs={ true }
          listHeight={ 200 }
        />
        <pre>
        {`
          <Carousel
            urls={ this.state.urls }
            use_thumbs={ true }
            listHeight={ 200 }
          />
        `}
        </pre>
      </div>
    )
  }
}

export default SimpleExample
