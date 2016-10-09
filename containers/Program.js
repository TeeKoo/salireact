import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'

import * as TodoActions from '../actions'

class Program extends Component {
  render() {
    //const { todos, actions } = this.props
    var styles = {
      marginTop: '50px'
    }
    return (
      <div>
        <Header />
        <div className="container">
        <h1>3x5 Ohjelma</h1>
        <p>3x5 ohjelma perustuu Mark Rippetoen Starting Strength ohjelmaan. Ohjelma sopii aloittelijoille. Ohjelmaan kuuluu Kyykky, Penkkipunnerrus, Maastaveto, Rinnalleveto ja Pystypressi. Treeni koostuu kolmesta liikkeestä ja liikkeitä vaihdetaan joka toinen päivä. Nosta painoja 2.5 kilolla jos saat tehtyä 3x5 puhtaasti.
        Esimerkki viikon ohjelmasta:<br/><br/>
        <b>Maanantai A</b>
        </p>
        <ul>
          <li>Kyykky 3x5</li>
          <li>Penkkipunnerrus 3x5</li>
          <li>Maastaveto 1x5</li>
        </ul>

        <b>Keskiviikko B</b>
        <ul>
          <li>Kyykky 3x5</li>
          <li>Pystypunnerrus 3x5</li>
          <li>Rinnalleveto 3x3</li>
        </ul>

        <b>Perjantai A</b>
        <ul>
          <li>Kyykky 3x5</li>
          <li>Penkkipunnerrus 3x5</li>
          <li>Maastaveto 1x5</li>
        </ul>


        Jos olet android käyttäjä, saat käyttöösi ilmaisen 3x5 Helper apin, jolla on helppo loggailla treenejäsi ja pitää motivaatiota yllä. Pääset lataamaan apin tästä: <a href="https://play.google.com/store/apps/details?id=com.tk.teekoo777.startingstrengthhelper">3x5 Helper</a>
        <p></p>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-5">
          <img className="featurette-image img-responsive max300" src="https://lh6.ggpht.com/BQSqKIU56ttfgI82n5CggkVAQzdWBobGri1XdyecU3Z_FEoKXxLw9KXMupt_CPlFbt4C=w300-rw" />
        </div>
        <div className="col-md-7">
          <h2 className="featurette-heading">3x5 Helper. <span className="text-muted">Android Appi</span></h2>
          <p className="lead">Lataa sovellus tästä: <a href="https://play.google.com/store/apps/details?id=com.tk.teekoo777.startingstrengthhelper">3x5 Helper</a>.</p>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Treeni. <span className="text-muted">Loggaa treenisi</span></h2>
          <p className="lead">Valitse A tai B treeni ja loggaa settisi.</p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-responsive max300" src="https://lh3.ggpht.com/AXBfx3gAGFbsG-yXwbgi87itRW_8OHVeDNNR1GuLFv3z9V_We-E-yF-Hw3xpRbPYfCE=h900-rw" />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-5">
          <img className="featurette-image img-responsive max300" src="https://lh3.ggpht.com/N5bh9oINQfVFWw8TNS4xpziZMhHkJxm0ncIUWSvs1SWHa_XD478asqPQZUb5IL4mbOA=h900-rw" />
        </div>
        <div className="col-md-7">
          <h2 className="featurette-heading">Graafit. <span className="text-muted">Tarkastele kehitystäsi</span></h2>
          <p className="lead">Tarkastele kehitystäsi graafien avulla. Näe miten kehityt matkalla Schwartzeneggeriksi.</p>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Historia. <span className="text-muted"></span></h2>
          <p className="lead">Katsele vanhoja treenejä ja muuta tietoja tarvittaessa.</p>
        </div>
        <div className="col-md-5">
          <img className="featurette-image img-responsive" src="https://lh6.ggpht.com/vAONbFYpJ26kKEbP8L1lCHiKTHR4Tfszd7bIwD-o30oh4SffP35u7Mazf7PrP9Ok8Dk=h900-rw" />
        </div>
      </div>
    </div>
        <Footer />
      </div>
    )
  }
}

Program.propTypes = {
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
)(Program)
