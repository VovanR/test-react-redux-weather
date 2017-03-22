import React, {Component, PropTypes} from 'react';
import './index.css';

class SearchCity extends Component {
  render() {
    return (
      <div className="search-city">
        <input
          className="search-city__input"
          autoFocus
          value=""
          placeholder="City"
          type="search"
          />
      </div>
    );
  }
}
SearchCity.propTypes = {
};
SearchCity.defaultProps = {
};

export default SearchCity;
