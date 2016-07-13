import React, { PropTypes, Component } from 'react'
import classnames from 'classnames'

class Footer extends Component {

  render() {
    var styles = {
      marginTop: '50px'
    };
    return (
      <footer style={styles}>
        <div className="row">
          <div className="container">
            <p>Ota yhteyttä ylläpitoon <a href="mailto:tanelille@hotmail.com">Sähköpostitse</a>.</p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
