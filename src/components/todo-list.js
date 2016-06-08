import React from 'react';
import Todo from './todo';

export default function TodoList({todos}) {
  return (
    <ul className="todo-list">
      {todos.map(x => {
        return (<Todo key={x.id} todo={x}/>);
      })}
    </ul>
  );
}