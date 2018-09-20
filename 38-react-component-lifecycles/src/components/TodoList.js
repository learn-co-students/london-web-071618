import React from 'react'

import Todo from './Todo'

const TodoList = props =>
  <ul>
    {
      props.todos.map(todo =>
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={props.removeTodo}
        />
      )
    }
  </ul>

export default TodoList
