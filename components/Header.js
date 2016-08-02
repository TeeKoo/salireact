import React, { PropTypes, Component } from 'react'
import TodoTextInput from './TodoTextInput'
import Search from './Search'

class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    const { alertStuff } = this.props
    return (
      <nav className="navbar">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="fa fa-bars"></span>
                </button>
                <a className="navbar-brand" href="/">Suomen salit</a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><a href="/salit">Salit</a></li>
                <li><a href="/ohjelma">3x5 Ohjelma</a></li>
              </ul>
              </div>
          </div>
      </nav>
    )
  }
}

/*Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}*/

export default Header
