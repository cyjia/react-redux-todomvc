import React from 'react';
import DeleteTodo from './delete-todo';
import ToggleTodo from './toggle-todo';
import {connect} from 'react-redux';

function Todo({todo, editing, onEnterEditing, onLeaveEditing}) {
  return (
    <li className={`${todo.completed ? 'completed' : ''} ${editing ? 'editing' : ''}`}>
      <div className="view">
        <ToggleTodo todo={todo}/>
        <label onDoubleClick={e => {
          e.preventDefault();
          onEnterEditing();
        }}>{todo.title}</label>
        <DeleteTodo todo={todo}/>
      </div>
      <input className="edit" value={todo.title}/>
    </li>)
}

const mapStateToProps = (state, ownProps) => {
  return {
    editing: state.editing == ownProps.todo.id
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onEnterEditing: () => {
      dispatch({
        type: 'ENTER_EDITING',
        id: ownProps.todo.id
      })
    },
    onLeaveEditing: () => {
      dispatch({
        type: 'LEAVE_EDITING',
        id: ownProps.todo.id
      })
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
