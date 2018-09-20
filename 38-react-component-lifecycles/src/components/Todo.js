import React from 'react'

class Todo extends React.Component {
  
  componentWillUnmount() {
    console.log(`Hey, I'm todo ${this.props.todo.id}, bye bye!`)
  }

  render() {
    const { todo, removeTodo } = this.props
    return (
      <li>
        <p>
          {todo.title}
          <button onClick={() => removeTodo(todo.id)}>
            X
          </button>
        </p>
      </li>
    )
  }

}

export default Todo
