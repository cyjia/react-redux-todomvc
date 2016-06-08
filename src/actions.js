import fetch from 'isomorphic-fetch';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

export function fetchTodosRequest() {
  return {
    type: 'FETCH_TODOS_REQUEST'
  }
}

export function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  }
}

export function receiveTodo(todo) {
  return {
    type: RECEIVE_TODO,
    todo: todo
  }
}
function full_url(partial) {
  return `https://whispering-dusk-43089.herokuapp.com${partial}`;
}

export function fetchTodos() {
  return function(dispatch) {
    dispatch(fetchTodosRequest());

    return fetch(full_url('/'))
      .then(response => response.json())
      .then(json => dispatch(receiveTodos(json))
      );
  }
}

export function addTodo(title) {
  return function(dispatch) {
    dispatch({
      type: 'ADD_TODO_REQUEST',
      title: title
    });

    return fetch(full_url('/'), {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }, { title: title }).then(response => response.json())
      .then(json => dispatch(receiveTodo(json)));
  };
}
