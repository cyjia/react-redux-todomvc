import React from 'react';
import DeleteTodo from './delete-todo';
import ToggleTodo from './toggle-todo';
import {connect} from 'react-redux';
import {updateTodoTitle} from '../actions';

function Todo({todo, editing, onEnterEditing, onLeaveEditing, onChange}) {
  const isEditing = editing.id === todo.id;
  return (
    <li className={`${todo.completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}>
      <div className="view">
        <ToggleTodo todo={todo}/>
        <label onDoubleClick={e => {
          e.preventDefault();
          onEnterEditing(todo);
        }}>{todo.title}</label>
        <DeleteTodo todo={todo}/>
      </div>
      {isEditing && (<input
        onBlur={e => {
          e.preventDefault();
          onLeaveEditing(todo, e.target.value);
        }}
        onChange={e => {
          e.preventDefault();
          onChange(e.target.value);
        }}
        autoFocus={isEditing}
        className="edit"
        onFocus={e => {
          e.target.value = e.target.value
        }}
        defaultValue={todo.title}
      />)}
    </li>)
}

const mapStateToProps = (state) => {
  return {
    editing: state.editing
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEnterEditing: (todo) => {
      dispatch({
        type: 'ENTER_EDITING',
        editing: { id: todo.id, content: todo.title }
      })
    },
    onLeaveEditing: (todo, value) => {
      dispatch({
        type: 'LEAVE_EDITING'
      });
      dispatch(updateTodoTitle(todo, value));
    },
    onChange: (content) => {
      dispatch({
        type: 'CHANGE_EDITING',
        content: content
      })
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
