import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class Gyms extends Component {

  render() {
    return (
      <ul>
        {this.props.gyms.map((gym, i) =>
          <li key={i}>{gym.name}</li>
        )}
      </ul>
    )
  }

}



export default Gyms
