import React, { Component } from 'react'

import TodoList from './components/TodoList'

class App extends Component {

  state = {
    todos: [],
    inputValue: ''
  }

  completeTodo = (id) => {
    const todos = JSON.parse(JSON.stringify(this.state.todos))
    const todo = todos.find(todo => todo.id === id)
    todo.completed = true
    this.setState({ todos })
  }

  addTodo = () => {
    const todos = this.state.todos
    const todo = {
      id: todos.length + 1,
      title: this.state.inputValue,
      completed: false
    }
    this.setState({ todos: [...todos, todo] })
  }

  removeTodo = (id) => {
    const todos = this.state.todos
    const filteredTodos = todos.filter(
      todo => todo.id !== id
    )
    this.setState({ todos: filteredTodos })
  }

  changeInput = (title) => {
    this.setState({ inputValue: title })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(resp => resp.json())
      .then(todos => this.setState({ todos }))
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to my Todo App!</h1>
        <input onChange={event => this.changeInput(event.target.value)} />
        <button onClick={this.addTodo}>ADD TODO</button>
        <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
      </div>
    )
  }
}

export default App
