import React from 'react';
import DeleteTodo from './delete-todo';
import CompleteTodo from './complete-todo';

export default function Todo({todo}) {
  return (
    <li className={`${todo.completed ? 'completed' : ''}`}>
      <div className="view">
        <CompleteTodo todo={todo}/>
        <label>{todo.title}</label>
        <DeleteTodo todo={todo}/>
      </div>
      <input className="edit" value={todo.title}/>
    </li>)
}
