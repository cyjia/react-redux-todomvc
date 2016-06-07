import { VisibilityFilters, SET_VISIBILITY_FILTER } from './actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [{
    id: 1
  }]
};

function todoApp(state = initialState, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return Object.assign({}, state, {
      visibilityFilter: action.filter
    });
  default:
    return state;
  }
}

export default todoApp;
