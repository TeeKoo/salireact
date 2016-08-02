import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Gym from './Gym'
import 'jQuery'
import 'datatables.net';
class Gyms extends Component {

  componentDidMount() {
      $('#datatable_dt').DataTable({
        pageLength: 100,
        "bInfo": false,
        "bLengthChange": false,
        "oLanguage": {
          "sSearch": "Etsi saleja: "
        }
      });
  }
  render() {
    var styles = {
      marginTop: '50px'
    }
    return (
      <div className="container" style={styles}>
        <div className="row">
          <div className="div-sm-12">
            <table id="datatable_dt" className="thesalidatatable table">
              <thead>
                <tr>
                  <th>Sali</th>
                  <th>Kaupunki</th>
                  <th>Tykkäykset</th>
                  <th>Kommentit</th>
                </tr>
              </thead>
              <tbody>
                  {this.props.gyms.map((gym, i) =>
                    <Gym data={gym} key={gym.id} />
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

}

export default Gyms
