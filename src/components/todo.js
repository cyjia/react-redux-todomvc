import React from 'react';
import DeleteTodo from './delete-todo';
import CompleteTodo from './complete-todo';

export default class Todo extends React.Component {
  render() {
    const todo = this.props.todo;
    return todo.completed ? (
      <li className="completed">
        <div className="view">
          <CompleteTodo todo={todo}/>
          <label>{todo.title}</label>
          <DeleteTodo todo={todo}/>
        </div>
        <input className="edit" value="Create a TodoMVC template"/>
      </li>) :
      (<li>
          <div className="view">
            <CompleteTodo todo={todo}/>
            <label>{todo.title}</label>
            <DeleteTodo todo={todo}/>
          </div>
          <input className="edit" value="Rule the web"/>
        </li>
      );
  }
}
