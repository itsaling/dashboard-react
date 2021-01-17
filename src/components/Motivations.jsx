import React, { Component } from "react";

class Motivations extends Component {
  render() {
    const { content, author } = this.props.quotes;
    return (
      <>
        <div className="card-container">
          <div className="quote">
            <h3>
              <i className="fas fa-quote-left"></i> Quote of the day
            </h3>
            <p>{content}</p>
            <p>- {author}</p>
          </div>
        </div>
      </>
    );
  }
}

export default Motivations;
