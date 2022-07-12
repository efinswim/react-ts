import React, { FC } from 'react'
import { ITodo } from '../types/types'

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div style={{ padding: 15, border: '1px solid gray'}}>
      {todo.id}. <h1>{todo.title}</h1>
      {todo.completed === true ? <p style={{color: 'green'}}>completed</p>: <p style={{color: 'red'}}>not completed</p>}
    </div>
  )
}

export default TodoItem