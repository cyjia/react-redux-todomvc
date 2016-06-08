import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

class DeleteTodo extends React.Component {

  render() {
    return (<button
      className="destroy"
      onClick={e => {
        this.props.deleteTodo(this.props.todo.id)
      }}
    />)
  }
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
