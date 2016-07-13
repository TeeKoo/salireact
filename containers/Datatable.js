import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import '../node_modules/fixed-data-table/dist/fixed-data-table.min.css'
import { fetchGymsIfNeeded } from '../actions'


class Datatable extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchGymsIfNeeded("reactjs"))
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { gyms } = this.props
    console.log(gyms)
    return (
      <ul>
        {gyms.map((gym, i) =>
          <li key={i}>{gym.name}</li>
        )}
      </ul>
    )
  }
}

Datatable.propTypes = {
  dispatch: PropTypes.func.isRequired,
  gyms: PropTypes.array.isRequired
}

function mapStateToProps(state, ownProps) {
  const {
    items: gyms
  } = { items: []};

  return {
    id: ownProps.params.id,
    filter: ownProps.location.query.filter,
    gyms
  };
}

export default connect(
  mapStateToProps
)(Datatable)
