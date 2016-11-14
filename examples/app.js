import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Carousel } from '../lib/index.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      window_width: document.body.offsetWidth,
      urls: [
        'http://images.freeimages.com/images/previews/a6c/window-7-1547198.jpg',
        'http://images.freeimages.com/images/previews/367/lincoln-cathedral-1440865.jpg',
        'http://images.freeimages.com/images/previews/5f7/hunter-s-bend-1316926.jpg',
        'http://images.freeimages.com/images/previews/423/burger-1320282.jpg',
        'http://images.freeimages.com/images/previews/f44/strawberry-cake-2-1323179.jpg',
        'http://images.freeimages.com/images/previews/f15/tropical-bliss-1311070.jpg',
        'http://images.freeimages.com/images/previews/5b0/rubik-s-cube-1-1424892.jpg'
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
      margin: '0 auto'
    }
    return (
      <Carousel
        urls={ this.state.urls }
        use_arrow={ true }
        use_thumbs={ true }
        lazy_load={ true }
        styleEase='ease-in-out'
        use_left_arrow={
          <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA8klEQVRoQ+3XQQrCQBQE0c7J1JOrN5MB1zFCV30CmXUIeV3ZzJaTn+3k358LMF3QKnBP8tzBvpOsZ/4+FuCV5LbzdY8k65m/jwHA1l9aA4CtbwDQ9Q0Auj4NwNenAfj6JEBZnwQo61MAbX0KoK1PANT1CYC6fhugr98G6Os3ASPrNwEj67cAY+u3AGPrX4DvBfbXL7QKrTsvclpXyrHfqAUYq9ACrN9jpEITMFKhCRip0AboFdoAvQIBUCsQALUCBdAqUACtAglQKpAApQINwCvQALyCAUArGAC0ggXAKlgA5DrZutRjH3fkxVeBIyuRz3wAEydQMTmQm2EAAAAASUVORK5CYII=" width="48" height="48" />
          </div>
        }
        use_right_arrow={
          <div>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAA9ElEQVRoQ+3XSwrCQBgE4c7J1JOrN5NZC/FBV/0GnLWG+bqyyZaDn+3g988fMF2wUeCW5LQDuSRZv0FOA3BOct253br8QiCnAVgXG6vQAoxVaAHGKjQBIxWagJEKbYBeoQ3QKxAAtQIBUCtQAK0CBdAqkAClAglQKtAAvAINwCsYALSCAUArWACswq8A7kkW8uNjAbBPTgPw6vX5ev2VywBg6xsAdH0DgK5PA/D1aQC+PglQ1icByvoUQFufAmjrEwB1fQKgrt8G6Ou3Afr6TcDI+k3AyPotwNj6LcDY+i3Ax9+xzT8YX2TN+z496w9A533j4Q8TJ1AxjLrO4wAAAABJRU5ErkJggg==" width="48" height="48" />
          </div>
        }
        options={ {
          listWidth: 400,
          listHeight: 300,
          thumbsPerPage: 5,
          start_actionID: 4
        } }
        beforeWrapperMouseOver={ (index, url) => console.log(index, url) }
        afterWrapperMouseOver={ (index, url) => console.log(index, url) }
        beforeWrapperMouseLeave={ (index, url) => console.log(index, url) }
        afterWrapperMouseLeave={ (index, url) => console.log(index, url) }
        beforeActionIDChange={ (preId) => console.log(preId) }
        afterActionIDChange={ (nextId) => console.log(nextId) }
      />
    )
  }
}

ReactDom.render(<App />, document.getElementById('example-view'))
