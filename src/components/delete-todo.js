import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

function DeleteTodo({todo, deleteTodo}) {
  return (<button
    className="destroy"
    onClick={e => {
        e.preventDefault();
        deleteTodo(todo.id)
      }}
  />)
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (content) => {
      dispatch(deleteTodo(content))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTodo);
