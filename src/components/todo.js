import React from 'react';

export default class Todo extends React.Component {
  render() {
    const todo = this.props.todo;
    return todo.isCompleted ? (
      <li className="completed">
        <div className="view">
          <input className="toggle" type="checkbox" checked/>
          <label>{todo.title}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" value="Create a TodoMVC template"/>
      </li>) :
      (<li>
          <div className="view">
            <input className="toggle" type="checkbox"/>
            <label>{todo.title}</label>
            <button className="destroy"></button>
          </div>
          <input className="edit" value="Rule the web"/>
        </li>
      );
  }
}
