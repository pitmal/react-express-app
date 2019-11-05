import React, { Component } from "react";
import "./customers.css";
class Customers extends Component {
  constructor() {
    super();
    this.state = { customers: [] };
  }
  componentDidMount() {
    fetch("/api/customers", { method: "GET" })
      .then(res => res.json())
      .then(customers =>
        this.setState({ customers }, () =>
          console.log("Fetched customers", customers)
        )
      );
  }
  render() {
    const customers = this.state.customers.map(customer => (
      <li key={customer.id}>
        {customer.firstName} {customer.lastName}
      </li>
    ));
    return <ul>{customers}</ul>;
  }
}
export default Customers;
