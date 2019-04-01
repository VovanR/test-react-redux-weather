import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CitySearchListItem from './CitySearchListItem';
import './index.css';

class CitySearchList extends Component {
  handleClickItem = (position) => {
    this.props.onClickCity(position);
  };

  render() {
    const {data} = this.props;

    return (
      <ul className="city-search-list">
        {data.map(item => (
          <CitySearchListItem
            key={item.id}
            id={item.id}
            name={item.name}
            position={item.position}
            onClick={this.handleClickItem}
          />
        ))}
      </ul>
    );
  }
}

CitySearchList.propTypes = {
  data: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired
};

CitySearchList.defaultProps = {
};

export default CitySearchList;
