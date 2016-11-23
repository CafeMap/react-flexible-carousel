import React, { Component } from 'react'

export default class CustomList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      urls,
      width,
      height
    } = this.props.setting
    return (
      <div style={{ display: 'flex', width: width * 10, height: height }}>
        {
          urls.map((url, index) => {
            return (
              <div
                style={{
                  position: 'relative',
                  width: width,
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
                  top: (height - 28) / 2
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
};
