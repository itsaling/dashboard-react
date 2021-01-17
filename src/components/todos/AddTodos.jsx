import React, { Component } from "react";

export class AddTodos extends Component {
  state = {
    title: "",
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <div className="todoAdd">
        <h3>
          <i className="fas fa-list-ul"></i> Todo List
        </h3>
        <form onSubmit={this.onSubmit}>
          <input
            className="input-todo"
            type="text"
            placeholder="Add something..."
            name="title"
            value={this.state.title}
            onChange={this.onChange}
            required
          />
          <button className="btn" type="submit">
            <i className="fas fa-location-arrow"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default AddTodos;
