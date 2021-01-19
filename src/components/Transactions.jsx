import React, { Component, useState } from "react";

export class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      inputAmount: "",
      cash: "",
    };
  }
  onChange = (e) => {
    this.setState({ inputAmount: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ amount: parseInt(this.state.cash) });
    this.refs.cashValue.value = "";
  };

  handleReset = () => {
    this.setState({ amount: 0 });
  };

  addAmount = (e) => {
    e.preventDefault();
    this.setState({
      amount: this.state.amount + parseInt(this.state.inputAmount),
    });
    this.setState({ inputAmount: "" });
  };
  subAmount = (e) => {
    e.preventDefault();
    this.setState({
      amount: this.state.amount - parseInt(this.state.inputAmount),
    });
    this.setState({ inputAmount: "" });
  };
  render() {
    return (
      <div className="card-container">
        <div className="calculator">
          <h3>
            <i className="fas fa-calculator"></i> Simple Calculation
          </h3>
          <form onSubmit={this.onSubmit}>
            <input
              type="number"
              ref="cashValue"
              placeholder="Inital Amount Here..."
              onChange={(e) => this.setState({ cash: e.target.value })}
              required
            />
            <button className="btn btn-outline-primary btn-sm" type="submit">
              Enter
            </button>
          </form>

          <form>
            <input
              type="number"
              placeholder="Amount..."
              value={this.state.inputAmount}
              onChange={this.onChange}
              required
            />
            <button
              className="btn btn-outline-success btn-sm"
              type="button"
              onClick={this.addAmount}
            >
              Add
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              type="button"
              onClick={this.subAmount}
            >
              Sub
            </button>
          </form>
          <br />
          <div className="flex-box">
            <h4>Cash: ${this.state.amount}</h4>
            <button className="btn btn-reset" onClick={this.handleReset}>
              Reset <i className="fas fa-undo"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Transactions;
