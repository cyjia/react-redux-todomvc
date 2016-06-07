import React from 'react';

import TodoList from './components/todo-list';

export default class App extends React.Component {
  render() {
    const todos = [
      { id: 1, isCompleted: true },
      { id: 2, isCompleted: true },
      { id: 3, isCompleted: false }
    ];

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autofocus/>
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox"/>
          <label for="toggle-all">Mark all as complete</label>
          <TodoList todos={todos}/>
        </section>
        <footer className="footer">
          <span className="todo-count"><strong>0</strong> item left</span>
          <ul className="filters">
            <li>
              <a className="selected" href="#/">All</a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  }
};
