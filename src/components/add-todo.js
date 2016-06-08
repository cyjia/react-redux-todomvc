import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends React.Component {

  render() {
    return (<input
      onKeyUp={ e => {
        e.preventDefault();
        if (e.keyCode === 13) {
          this.props.addTodo(e.target.value);
          e.target.value = "";
        }
      }}
      className="new-todo"
      placeholder="What needs to be done?"
      autofocus/>);
  }
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
