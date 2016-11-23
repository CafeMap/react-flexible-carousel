import React, { Component } from 'react'

export default class CustomThumbs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      setting,
      handler
    } = this.props
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
};
