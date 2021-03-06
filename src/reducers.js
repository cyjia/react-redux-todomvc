import { VisibilityFilters, SET_VISIBILITY_FILTER, RECEIVE_TODOS, RECEIVE_TODO } from './actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [],
  editing: {}
};

function removeTodo(todos, todo) {
  return todos.filter(t => t.id !== todo.id);
}

function updateTodo(todos, todo) {
  return todos.map(t =>t.id === todo.id ? Object.assign({}, t, todo) : t);
}

function todoApp(state = initialState, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return Object.assign({}, state, {
      visibilityFilter: action.filter
    });
  case RECEIVE_TODOS:
    return Object.assign({}, state, { todos: action.todos.slice() });
  case RECEIVE_TODO:
    return Object.assign({}, state, {
      todos: state.todos.concat(action.todo)
    });
  case "DELETE_TODO_RESPONSE":
    return Object.assign({}, state, { todos: removeTodo(state.todos, action.todo) });
  case "UPDATE_TODO_RESPONSE":
    return Object.assign({}, state, { todos: updateTodo(state.todos, action.todo) });
  case "ENTER_EDITING":
    return Object.assign({}, state, { editing: action.editing });
  case "LEAVE_EDITING":
    return Object.assign({}, state, { editing: {} });
  case "CHANGE_EDITING":
    return Object.assign({}, state, { editing: { id: state.editing.id, content: action.content } });
  default:
    return state;
  }
}

export default todoApp;
