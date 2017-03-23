import React, {Component, PropTypes} from 'react';

class CitySearchListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.id);
  }

  render() {
    return (
      <li
        className="city-search-list-item"
        onClick={this.handleClick}
        >
        {this.props.name}
      </li>
    );
  }
}
CitySearchListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
// CitySearchListItem.defaultProps = {
// };

export default CitySearchListItem;
