import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

function FilterLink({active, onClick, children} = {}) {
  return (
    <a className={active ? 'selected' : ''}
       href="#/"
       onClick={e => {
          e.preventDefault();
          onClick();
        }}>
      {children}
    </a>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.visibilityFilter === ownProps.filter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
