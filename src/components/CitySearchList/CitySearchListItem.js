import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CitySearchListItem extends Component {
  handleClick = () => {
    this.props.onClick(this.props.position);
  };

  handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      this.props.onClick(this.props.position);
    }
  };

  render() {
    return (
      <li
        className="city-search-list__item"
        tabIndex="0"
        onClick={this.handleClick}
        onKeyUp={this.handleKeyUp}
      >
        {this.props.name}
      </li>
    );
  }
}

CitySearchListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

CitySearchListItem.defaultProps = {
};

export default CitySearchListItem;
