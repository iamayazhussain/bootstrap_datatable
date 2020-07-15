import React, { Component } from "react";

import BootstrapTable from "react-bootstrap-table-next";

import axios from "axios";

export class Bootstraptab extends Component {
  state = {
    employee: [],

    columns: [
      {
        dataField: "id",

        text: "ID",
      },

      {
        dataField: "userId",

        text: "UId",
      },
      {
        dataField: "title",

        text: "Title",

        sort: true,
      },
      {
        dataField: "completed",

        text: "Com",

        sort: true,
      },
    ],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/todos/`).then(res => {
      const employee = res.data;
      this.setState({ employee });
    });
  }
  render() {
    return (
      <div className="container">
        <div class="row" className="hdr">
          <div class="col-sm-12 btn btn-info">
            React Bootstrap Data Table with Api
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <BootstrapTable
            striped
            hover
            keyField="id"
            data={this.state.employee}
            columns={this.state.columns}
          ></BootstrapTable>
        </div>
      </div>
    );
  }
}

export default Bootstraptab;
