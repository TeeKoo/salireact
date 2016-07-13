import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'
import Search from './Search'

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
          <div className="container">
            <h1>Suomen Salit</h1>
            <p>Etsi, arvostele ja kommentoi lempisalejasi.</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Kaikki salit »</a></p>
          </div>
      </div>
    )
  }
}


export default Jumbotron
