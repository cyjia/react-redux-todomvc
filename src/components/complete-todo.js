import React from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../actions';

class CompleteTodo extends React.Component {
  render() {
    return (<input
      className="toggle"
      type="checkbox"
      checked={this.props.completed}
      onChange={ e => {
        e.preventDefault();
        this.props.onChange(e.target.checked)
      }}
    />);
  }
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
