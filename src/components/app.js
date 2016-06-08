import React from 'react';
import VisibleTodoList from './visible-todo-list';
import AddTodo from './add-todo';
import FilterLink from './filter-link';
import ItemLeft from './item-left';

export default function App() {
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        <input className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <VisibleTodoList />
      </section>
      <footer className="footer">
        <ItemLeft />
        <ul className="filters">
          <li>
            <FilterLink filter="SHOW_ALL">All</FilterLink>
          </li>
          <li>
            <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
          </li>
          <li>
            <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </section>
  );
};
