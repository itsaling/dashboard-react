import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    const { title, id } = this.props.todo;
    return (
      <>
        <div className="todoItem">
          <p>{title}</p>
          <button
            className="btn btn-circle btn-sm btn-del"
            onClick={this.props.delTodo.bind(this, id)}
          >
            <i class="far fa-trash-alt"></i>
          </button>
        </div>
      </>
    );
  }
}

export default TodoItem;
