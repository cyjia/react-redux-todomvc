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
          onEnterEditing(todo.id);
        }}>{todo.title}</label>
        <DeleteTodo todo={todo}/>
      </div>
      {editing && (<input
        onBlur={e => {
          e.preventDefault();
          onLeaveEditing(todo.id);
        }}
        autoFocus={editing}
        className="edit" value={todo.title}/>)}
    </li>)
}

const mapStateToProps = (state, ownProps) => {
  return {
    editing: state.editing == ownProps.todo.id
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEnterEditing: (id) => {
      dispatch({
        type: 'ENTER_EDITING',
        id: id
      })
    },
    onLeaveEditing: (id) => {
      dispatch({
        type: 'LEAVE_EDITING',
        id: id
      })
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
