import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Carousel } from '../lib/index.js'

const CustomThumbs = (setting, handler) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      paddingTop: 10
    }}>
      {
        setting.urls.map((url, index) => {
          return (
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
                border: `${ setting.actionID === index ? '2px solid #000' : '1px solid #fff' }`,
                backgroundImage: `url(${url})`,
                backgroundSize: 'contain',
                cursor: 'pointer'
              }}
              onClick={ () => handler.handleChangeThumbsID(index) }
              key={ index }>
            </div>
          )
        })
      }
    </div>
  )
}

const CustomList = (setting) => {
  return (
    <div style={{ display: 'flex', width: setting.width * 10, height: setting.height }}>
      {
        setting.urls.map((url, index) => {
          return (
            <div
              style={{
                position: 'relative',
                width: setting.width,
                backgroundImage: `url(${url})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }} key={ index }>
              <p style={{
                width: '100%',
                textAlign: 'center',
                position: 'absolute',
                top: 0
              }}>
                <span
                  style={{
                    padding: 5,
                    backgroundColor: 'rgba(255, 255, 255, .6)',
                    color: '#000'
                  }}>Im top of the list index { index }</span>
              </p>
              <p style={{
                width: '100%',
                textAlign: 'center',
                position: 'absolute',
                top: (setting.height - 28) / 2
              }}>
                <span
                  style={{
                    padding: 5,
                    backgroundColor: 'rgba(0, 0, 0, .6)',
                    borderRadius: 5,
                    color: '#fff'
                  }}>
                    Im Middle of the list button
                  </span>
                  <button onClick={ () => console.log(`clicked-${index}`) }>Click Me</button>
                  <button onClick={ () => console.log(`clicked me second button`) }>Click Me Please</button>
              </p>
              <p style={{
                width: '100%',
                textAlign: 'center',
                position: 'absolute',
                bottom: 30
              }}>
                <span
                  style={{
                    border: '1px solid #ccc',
                    padding: 5,
                    backgroundColor: 'rgba(0, 0, 0, .6)',
                    color: '#fff'
                  }}>awesome I can perform myself</span>
              </p>
              <p style={{
                width: '100%',
                textAlign: 'center',
                position: 'absolute',
                bottom: 0
              }}>
                <span
                  style={{
                    border: '1px solid #ccc',
                    padding: 5,
                    backgroundColor: 'rgba(0, 0, 0, .6)',
                    color: '#fff'
                  }}>{ url }</span>
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

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
        'http://images.freeimages.com/images/previews/5b0/rubik-s-cube-1-1424892.jpg',
        'http://images.freeimages.com/images/previews/dda/vintage-gibson-guitar-1422628.jpg',
        'http://images.freeimages.com/images/previews/2cd/goblet-of-coffee2-1329226.jpg',
        'http://images.freeimages.com/images/previews/816/fountain-at-navy-pier-chicago-1502726.jpg'
      ],
      auto_play: false,
      use_arrow: false,
      use_thumbs: true,
      use_custom_thumbs: false,
      use_custom_lists: false,
      lazy_load: false,
      thumbsPerPage: 3,
      after_action_id: 0,
      before_action_id: 0
    }
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      this.setState({
        window_width: document.body.offsetWidth,
      })
    })
  }

  render() {
    const example_wrapper_style = {
      display: 'block'
    }
    const setting_style = {
      padding: 10
    }
    return (
      <div style={ example_wrapper_style }>
        <Carousel
          urls={ this.state.urls }
          use_arrow={ this.state.use_arrow }
          auto_play={ this.state.auto_play }
          use_thumbs={ this.state.use_thumbs }
          touch_mode={ true }
          lazy_load={ true }
          custom_styles={{
            thumbs: { paddingTop: 10 }
          }}
          custom_thumbs={ this.state.use_custom_thumbs ? CustomThumbs : undefined }
          custom_lists={ this.state.use_custom_lists ? CustomList : undefined }
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
            listWidth: document.body.offsetWidth,
            listHeight: 300,
            thumbsPerPage: this.state.thumbsPerPage,
            start_actionID: 0
          } }
          beforeWrapperMouseOver={ (index, url) => console.log('beforeWrapperMouseOver >', index, url) }
          afterWrapperMouseOver={ (index, url) => console.log('afterWrapperMouseOver >', index, url) }
          beforeWrapperMouseLeave={ (index, url) => console.log('beforeWrapperMouseLeave >', index, url) }
          afterWrapperMouseLeave={ (index, url) => console.log('afterWrapperMouseLeave >', index, url) }
          beforeActionIDChange={ (preId) => this.setState({ before_action_id: preId }) }
          afterActionIDChange={ (nextId) => this.setState({ after_action_id: nextId }) }
        />
        <div style={ setting_style }>
          <div>
            <input
              type='checkbox'
              defaultChecked={ this.state.auto_play }
              onChange={ () => this.setState({ auto_play: !this.state.auto_play }) }/> Auto Play
          </div>
          <div>
            <input
              type='checkbox'
              defaultChecked={ this.state.use_thumbs }
              onChange={ () => this.setState({ use_thumbs: !this.state.use_thumbs }) }/> Use Thumbs
          </div>
          <div>
            <input
              type='checkbox'
              defaultChecked={ this.state.use_custom_thumbs }
              onChange={ () => this.setState({ use_custom_thumbs: !this.state.use_custom_thumbs }) }/> Use Custom Thumbs
          </div>
          <div>
            <input
              type='checkbox'
              defaultChecked={ this.state.use_custom_lists }
              onChange={ () => this.setState({ use_custom_lists: !this.state.use_custom_lists }) }/> Use Custom Lists
          </div>
          <div>
            <input
              type='checkbox'
              defaultChecked={ this.state.use_arrow }
              onChange={ () => this.setState({ use_arrow: !this.state.use_arrow }) }/> Use Arrow
          </div>
          <div>
            Use PerPage
            <input
              type='range'
              defaultValue={ this.state.thumbsPerPage }
              min={ 1 }
              max={ 10 }
              onChange={ (ev) => this.setState({ thumbsPerPage: ev.target.value }) }/>
              { this.state.thumbsPerPage }
          </div>
          <div>
            Before Action ID <input type='text' value={ this.state.before_action_id } disabled />
            After Action ID <input type='text' value={ this.state.after_action_id } disabled />
          </div>
          <div>
            <button onClick={ () => this.setState({ urls: this.state.urls.concat('http://images.freeimages.com/images/previews/f44/strawberry-cake-2-1323179.jpg') }) }>ADD Image</button>
            <button onClick={ () => this.setState({ urls: this.state.urls.slice(0, -1) }) }>REMOVE Image</button>
          </div>
        </div>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('example-view'))
