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
      }),
      body: JSON.stringify({ title: title })
    }).then(response => response.json())
      .then(json => dispatch(receiveTodo(json)));
  };
}

export function deleteTodo(id) {
  return function(dispatch) {
    dispatch({
      type: 'DELETE_TODO_REQUEST',
      id: id
    });

    return fetch(full_url(`/${id}`), {
      method: 'DELETE',
      mode: 'cors',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => response.json())
      .then(json => dispatch({
        type: 'DELETE_TODO_RESPONSE',
        todo: json
      }))
  }
}

export function completeTodo(todo, completed) {
  return function(dispatch) {
    dispatch({
      type: 'COMPLETE_TODO_REQUEST',
      completed: completed,
      todo: todo
    });

    return fetch(full_url(`/${todo.id}`), {
      method: 'PATCH',
      mode: 'cors',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ completed: completed })
    }).then(response => response.json())
      .then(todo => dispatch({
        type: 'COMPLETE_TODO_RESPONSE',
        todo: todo
      }))
  }
}

export function clearCompleted(todos) {
  return function(dispatch) {
    dispatch({
      type: 'CLEAR_COMPLETED_REQUEST',
      todos: todos
    });
    return Promise.all(todos.filter(t => t.completed).map(t => deleteTodo(t.id)(dispatch)))
  }
}
