import fetch from 'isomorphic-fetch';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
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
    type: 'RECEIVE_TODOS',
    todos: todos
  }
}

export function fetchTodos() {
  return function(dispatch) {
    dispatch(fetchTodosRequest());

    return fetch('https://whispering-dusk-43089.herokuapp.com')
      .then(response => response.json())
      .then(json => dispatch(receiveTodos(json))
      );
  }
}


