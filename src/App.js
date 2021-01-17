import React, { Component } from "react";
import Sidebar from "./components/Sidebar";
import Goals from "./components/Goals";
import Weather from "./components/Weather";
import AddTodos from "./components/todos/AddTodos";
import Todos from "./components/todos/Todos";
import Motivations from "./components/Motivations";
import Transactions from "./components/Transactions";
import CalendarUse from "./components/CalendarUse";
import Greetings from "./components/Greetings";
import axios from "axios";
import "./css/style.css";

export class App extends Component {
  state = {
    weathers: [],
    location: [],
    descriptions: [],
    quotes: [],
    todos: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => this.setState({ todos: res.data }));
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=baltimore&appid=5c863e4798d251dbe4b77ba20bcab195`
      )
      .then((res) => {
        this.setState({
          weathers: res.data.main,
          location: res.data.name,
          descriptions: res.data.weather,
        });
      });
    axios
      .get("https://api.quotable.io/random")
      .then((res) => this.setState({ quotes: res.data }));
  }
  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((todo) => todo.id !== id)],
        })
      );
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <Sidebar />
            </div>
            <div className="col dashboard">
              <Greetings />
              <div className="card-columns">
                <div className="card">
                  <Transactions
                    money={this.state.money}
                    addMoney={this.addMoney}
                  />
                </div>
                <div className="card">
                  <Goals />
                </div>
                <div className="card">
                  <Weather
                    weathers={this.state.weathers}
                    location={this.state.location}
                    descriptions={this.state.descriptions}
                  />
                </div>
                <div className="card">
                  <Motivations quotes={this.state.quotes} />
                </div>
                <div className="card">
                  <div className="card-container">
                    <AddTodos addTodo={this.addTodo} />
                    <Todos todos={this.state.todos} delTodo={this.delTodo} />
                  </div>
                </div>
                <div className="card">
                  <CalendarUse />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
