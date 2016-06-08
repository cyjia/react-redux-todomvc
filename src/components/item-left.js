import React from 'react';
import {connect} from 'react-redux';

function ItemLeft({todos}) {
  const count = todos.reduce((sum, t) => sum + (t.completed ? 0 : 1), 0);
  return (<span className="todo-count"><strong>{count}</strong> item left</span>)
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos || []
  }
};

export default connect(mapStateToProps)(ItemLeft);
