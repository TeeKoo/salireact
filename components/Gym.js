import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class Gym extends Component {

  removeBr(text) {
    return text.replace(/<br\/>/g, '');
  }

  render() {
    return (
          <tr>
            <td onClick={this.dostuff}>{this.props.data.name}</td>
            <td>{this.removeBr(this.props.data.address)}</td>
            <td>{this.props.data.upvotes}</td>
            <td>{this.props.data.commentCount}</td>
            <td>{this.props.data.id}</td>
          </tr>
        )
  }

}

export default Gym
