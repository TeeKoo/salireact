import React, { PropTypes, Component } from 'react'

class Search extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    var styles = {
      'marginRight': '10px'
    }
    const { alertStuff } = this.props
    return (
      <form className="navbar-form navbar-right">
        <div className="form-group">
          <input type="text" placeholder="Etsi saleja.." className="form-control" style={styles}/>
        </div>
        <button type="submit" className="btn btn-success">Etsi</button>
      </form>
    )
  }
}

export default Search
