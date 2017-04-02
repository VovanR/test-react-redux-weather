import React, {Component} from 'react';
import './index.css';
import {connect} from 'react-redux';
import {clearActiveCity} from '../../ducks/activeCity';

class ClearActivePosition extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClickClearActivePosition();
  }

  render() {
    if (!this.props.activeCity) {
      return null;
    }

    return (
      <button
        className="clear-active-position"
        onClick={this.handleClick}
        type="button"
        >
        {'Clear active position'}
      </button>
    );
  }
}
ClearActivePosition.propTypes = {
};
ClearActivePosition.defaultProps = {
};

export default connect(
  state => {
    const {
      activeCity
    } = state;

    return {
      activeCity
    };
  },

  dispatch => ({
    onClickClearActivePosition: () => {
      dispatch(clearActiveCity());
    }
  })
)(ClearActivePosition);
