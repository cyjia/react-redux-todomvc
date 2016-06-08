import React from 'react';
import {connect} from 'react-redux';
import {toggleAll} from '../actions';

function ToggleAll({todos, onChange}) {
  const checked = todos.length > 0 && !todos.find(t => t.completed !== todos[0].completed);
  return (
    <input
      className="toggle-all"
      type="checkbox"
      checked={checked}
      onChange={e => {
       onChange(todos);
      }}
    />
  )
}

const mapStateToProps = (state) => {
  return { todos: state.todos }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (todos) => {
      dispatch(toggleAll(todos));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleAll);
