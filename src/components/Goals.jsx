import React, { Component } from "react";

export class Goals extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="goal">
          <h3>
            <i className="fas fa-funnel-dollar"></i> Money Management
          </h3>
          <br />
          <div className="row pb-4">
            <div className="col-sm-4 border-right">
              <img src="/image/money.JPG" alt="money" />
            </div>
            <div className="col-sm text-left pl-5">
              <p>Cash</p>
              <h4>$5,423</h4>
            </div>
          </div>
          <div className="row pb-4">
            <div className="col-sm-4 border-right">
              <img src="/image/card.JPG" alt="money" />
            </div>
            <div className="col-sm text-left pl-5">
              <p>Credit Card</p>
              <h4>$5,423</h4>
            </div>
          </div>
          <div className="row pb-4">
            <div className="col-sm-4 border-right">
              <img src="/image/invest.JPG" alt="money" />
            </div>
            <div className="col-sm text-left pl-5">
              <p>Investment</p>
              <h4>$5,423</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Goals;
