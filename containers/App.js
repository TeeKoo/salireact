import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Social from '../components/Social'
import Jumbotron from '../components/Jumbotron'
import Introheader from '../components/Introheader'
import * as TodoActions from '../actions'
import { Link  } from 'react-router'

class App extends Component {
  render() {
    const { actions } = this.props
    var styles = {
      marginTop: '50px'
    }
    return (
      <div>
        <Header />
        <Jumbotron />
        <div className="container" style={styles}>
            <div className="row">
                <Introheader
                glyph="fa fa-search front_glyph"
                introheader="Etsi saleja suomesta näppärästi"
                introtext="Suomen Salit sivulta löydät lempisalisi nopeasti. Etsi salia oikeasta yläkulmasta kaupungin tai salin nimen mukaan."/>
                <Introheader
                glyph="fa fa-comments front_glyph"
                introheader="Anna kommentteja lempisalistasi"
                introtext="Voit kommentoida ja arvostella lempi saliasi tai kysellä ja katsella mitä mieltä muut ovat olleet salista."/>
                <Introheader
                glyph="fa fa-check front_glyph"
                introheader="Arvostele saleja ylös/alas äänillä"
                introtext="Voit antaa arvosanan äänestämällä ylös tai alas."/>
            </div>
        </div>
        <Social />
        <Footer />
      </div>
    )
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
