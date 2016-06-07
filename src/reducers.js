import { VisibilityFilters, SET_VISIBILITY_FILTER, RECEIVE_TODOS } from './actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: []
};

function todoApp(state = initialState, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return Object.assign({}, state, {
      visibilityFilter: action.filter
    });
  case RECEIVE_TODOS:
    return Object.assign({}, state, { todos: action.todos.slice() });
  default:
    return state;
  }
}

export default todoApp;
