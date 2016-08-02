import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { fetchGymsIfNeeded } from '../actions'
import Gyms from '../components/Gyms'
import Header from '../components/Header'
import Footer from '../components/Footer'

class Datatable extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchGymsIfNeeded("reactjs"))
  }

  componentWillReceiveProps(nextProps) {

  }


  render() {
    const { gyms } = this.props
    return (
      <body>
      <Header />
        <ul>
        {gyms.length>0 &&
          <Gyms gyms={gyms}/>
        }
        </ul>
        <Footer />
      </body>
    )
  }
}

Datatable.propTypes = {
  dispatch: PropTypes.func.isRequired,
  gyms: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  console.log(state.gyms.items)
  return {
    id: ownProps.params.id,
    filter: ownProps.location.query.filter,
    gyms: state.gyms.items || []
  };
}

export default connect(
  mapStateToProps
)(Datatable)
