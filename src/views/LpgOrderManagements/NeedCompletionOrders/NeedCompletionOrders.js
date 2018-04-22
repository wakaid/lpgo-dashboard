import _ from 'underscore';
import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from 'react-table'
import "react-table/react-table.css";

class NeedCompletionOrders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: []
    };
    this.fetchIncomingOrders = this.fetchIncomingOrders.bind(this);
    this.completeOrder = this.completeOrder.bind(this);
  }

  fetchIncomingOrders() {
    axios.get(`http://128.199.226.142:8000/orders?status=PAID`)
      .then(res => {
        this.setState({ orders: res.data });
      });
  }

  completeOrder(id) {
    axios.post(`http://128.199.226.142:8000/orders/${id}/complete!`)
      .then(res => {
        this.fetchIncomingOrders();
      });
  }

  componentDidMount() {
    this.fetchIncomingOrders();
  }

  render() {
    if (_.isEmpty(this.state.orders)) {
      return (
        <div className="animated fadeIn">
          <div className="card">
            <div className="card-header">
              <i className="icon-list"></i> Incoming Orders
            </div>
            <div className="card-body">
              <h5>There is no order that need your completion</h5>
            </div>
          </div>
        </div>
      );
    }

    const columns = [{
      Header: 'LPG Type',
      accessor: 'lpg_id'
    }, {
      Header: 'Agent Name',
      accessor: 'agent_id'
    }, {
      Header: 'Quantity',
      accessor: 'quantity'
    }, {
      Header: 'Total Price',
      accessor: 'total_price'
    }, {
      id: 'action',
      Header: 'Actions',
      accessor: props => <button type="button" className="btn btn-block btn-outline-success" onClick={ () => this.completeOrder(props.id) } >Complete!</button>
    }];

    return (
      <div className="animated fadeIn">
        <div className="card">
          <div className="card-header">
            <i className="icon-list"></i> Uncompleted Orders
          </div>
          <div className="card-body">
            <ReactTable
              data = { this.state.orders }
              columns = { columns }
              defaultPageSize = { 10 }
              className="-striped -highlight"
              style={{ textAlign: "center" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NeedCompletionOrders;