import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

class FilterLink extends React.Component {
  render() {
    return (
      <a className={this.props.active ? 'selected' : ''}
         href="#/"
         onClick={e => {
          e.preventDefault();
          this.props.onClick();
        }}>
        {this.props.children}
      </a>
    );
  }
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
