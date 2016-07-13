import React, { Component, PropTypes } from 'react'
var classNames = require('classnames');

class Introheader extends Component {
  render() {
    var divStyle = {
      textAlign: 'center'
    };
    var glyphStyle = {
      fontSize: '70px',
      color: '#4582ec'
    }
    var theclasses = classNames(this.props.glyph);
    return (
      <div className="col-md-4" style={divStyle}>
        <span className={theclasses} style={glyphStyle}></span>
        <h2>{this.props.introheader}</h2>
        <p>{this.props.introtext}</p>
      </div>
    )
  }
}

export default Introheader
