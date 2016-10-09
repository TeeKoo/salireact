import React, { Component, PropTypes } from 'react'
import Gym from './Gym'
import 'jQuery'
import 'datatables.net';
import { browserHistory } from 'react-router'
class Gyms extends Component {

  componentDidMount() {
     var table = $('#datatable_dt').DataTable({
        pageLength: 100,
        "bInfo": false,
        "bLengthChange": false,
        "oLanguage": {
          "sSearch": "Etsi saleja: "
        },
        "columnDefs": [
             {
                 "targets": [ 4 ],
                 "visible": false,
                 "searchable": false
             },
        ]
      });
    $('#datatable_dt tbody').on( 'click', 'tr', function () {
        browserHistory.push('/salit/'+table.row(this).data()[4])
    } );
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
                  <th>Id</th>
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
