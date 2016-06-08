import React from 'react';
import {connect} from 'react-redux';
import {clearCompleted} from '../actions';

function ClearCompleted({clear, todos}) {
  return (<button
    className="clear-completed"
    onClick={e => {
      e.preventDefault();
      clear(todos);
    }}
  >Clear completed</button>)
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    clear: (todos) => {
      dispatch(clearCompleted(todos))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClearCompleted);
