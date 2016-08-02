import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class Gym extends Component {

  removeBr(text) {
    return text.replace(/<br\/>/g, '');
  }

  render() {
    return (
          <tr>
            <td>{this.props.data.name}</td>
            <td>{this.removeBr(this.props.data.address)}</td>
            <td>{this.props.data.upvotes}</td>
            <td>{this.props.data.comment_count}</td>
          </tr>
        )
  }

}

export default Gym
