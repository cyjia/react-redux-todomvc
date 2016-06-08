import React from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../actions';

function CompleteTodo({completed, onChange}) {
  return (<input
    className="toggle"
    type="checkbox"
    checked={completed}
    onChange={ e => {
        e.preventDefault();
        onChange(e.target.checked)
      }}
  />);
}

const mapStateToProps = (state, ownProps) => {
  return { completed: ownProps.todo.completed }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (completed) => {
      dispatch(completeTodo(ownProps.todo, completed))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CompleteTodo);
