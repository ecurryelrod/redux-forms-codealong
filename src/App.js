import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo />
      </div>
    );
  }
}
