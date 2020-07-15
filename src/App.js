import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import axios from "axios";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

class Bootstraptab extends Component {
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
        filter: textFilter(),
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
    const options = {
      page: 2,

      sizePerPageList: [
        {
          text: "5",
          value: 5,
        },
        {
          text: "10",
          value: 10,
        },
        {
          text: "All",
          value: this.state.employee.length,
        },
      ],

      sizePerPage: 5,

      pageStartIndex: 0,

      paginationSize: 3,

      prePage: "Prev",

      nextPage: "Next",

      firstPage: "First",

      lastPage: "Last",
    };
    return (
      <div className="container">
        <div class="row" className="hdr">
          <div class="col-sm-12 btn btn-info">
            React Bootstrap Table with Searching and Custom Pagination
          </div>
        </div>

        <div className="container" style={{ marginTop: 50 }}>
          <BootstrapTable
            striped
            hover
            keyField="id"
            data={this.state.employee}
            columns={this.state.columns}
            filter={filterFactory()}
            pagination={paginationFactory(options)}
          />
        </div>
      </div>
    );
  }
}

export default Bootstraptab;
