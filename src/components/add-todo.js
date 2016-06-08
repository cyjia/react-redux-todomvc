import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

function AddTodo({addTodo}) {
  return (<input
    onKeyUp={ e => {
        e.preventDefault();
        if (e.keyCode === 13) {
          addTodo(e.target.value);
          e.target.value = "";
        }
      }}
    className="new-todo"
    placeholder="What needs to be done?"
    autoFocus={true}/>);
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (content) => {
      dispatch(addTodo(content))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
