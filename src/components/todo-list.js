import React from 'react';
import Todo from './todo';

export default class TodoList extends React.Component {
  render() {
    const todos = this.props.todos;
    return (
      <ul className="todo-list">
        {todos.map(x => {
          return (<Todo key={x.id} data={x} />);
        })}
      </ul>
    );
  }
}