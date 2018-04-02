import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {clearActivePosition} from '../../ducks/activePosition';
import Copyright from '../../components/Copyright';
import ApiCredits from '../../components/ApiCredits';
import ClearActivePosition from '../../components/ClearActivePosition';
import './index.css';

class Footer extends Component {
  handleClickClearActivePosition = () => {
    this.props.onClickClearActivePosition();
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__action">
          {this.props.activePosition && (
            <ClearActivePosition
              onClick={this.handleClickClearActivePosition}
              />
          )}
        </div>

        <div className="footer__copyright">
          <Copyright/>
        </div>

        <div className="footer__legal">
          <ApiCredits/>
        </div>
      </footer>
    );
  }
}
Footer.propTypes = {
  activePosition: PropTypes.object,
};
Footer.defaultProps = {
};

export default connect(
  state => {
    const {
      activePosition
    } = state;

    return {
      activePosition
    };
  },

  dispatch => ({
    onClickClearActivePosition: () => {
      dispatch(clearActivePosition());
    }
  })
)(Footer);
