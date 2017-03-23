import React, {Component} from 'react';
import './index.css';
import {setCitySearchQuery} from '../../actions/citySearch';
import {setActiveCity} from '../../actions/city';
import {connect} from 'react-redux';
import CitySearchList from '../CitySearchList';

class CitySearch extends Component {
  constructor(props) {
    super(props);
    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.handleClickCity = this.handleClickCity.bind(this);
  }

  handleChangeQuery(e) {
    this.props.onChangeCitySearch(e.target.value);
  }

  handleClickCity(cityId) {
    this.props.onChangeActiveCity(cityId);
  }

  render() {
    return (
      <div className="city-search">
        <input
          className="city-search__input"
          autoFocus
          value={this.props.citySearchQuery}
          onChange={this.handleChangeQuery}
          placeholder="City"
          type="search"
          />

        {this.props.citySearchResult && this.props.citySearchResult.data ? (
          <CitySearchList
            data={this.props.citySearchResult.data}
            onClickCity={this.handleClickCity}
            />
        ) : null}
      </div>
    );
  }
}
CitySearch.propTypes = {
};
CitySearch.defaultProps = {
};

export default connect(
  state => {
    const {
      citySearchQuery,
      citySearchResult
    } = state;

    return {
      citySearchQuery,
      citySearchResult
    };
  },

  dispatch => ({
    onChangeCitySearch: query => {
      dispatch(setCitySearchQuery(query));
    },

    onChangeActiveCity: cityId => {
      dispatch(setActiveCity(cityId));
    }
  })
)(CitySearch);
