import React, {Component} from 'react';
import './index.css';
import {connect} from 'react-redux';
import DebounceInput from 'react-debounce-input';
import {setAutocompleteQuery} from '../../ducks/autocomplete';
import {setActivePosition} from '../../ducks/activePosition';
import CitySearchList from '../CitySearchList';
import Footer from '../Footer';

class CitySearch extends Component {
  constructor(props) {
    super(props);
    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.handleClickCity = this.handleClickCity.bind(this);
  }

  handleChangeQuery(e) {
    this.props.onChangeCitySearch(e.target.value);
  }

  handleClickCity(position) {
    this.props.onChangeActivePosition(position);
  }

  render() {
    return (
      <div className="city-search">
        <DebounceInput
          className="city-search__input"
          minLength={2}
          debounceTimeout={500}
          placeholder="City"
          type="search"
          value={this.props.autocomplete.query}
          onChange={this.handleChangeQuery}
          autoFocus
          />

        {this.props.autocomplete && this.props.autocomplete.data ? (
          <CitySearchList
            data={this.props.autocomplete.data}
            onClickCity={this.handleClickCity}
            />
        ) : null}

        <Footer/>
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
      autocomplete
    } = state;

    return {
      autocomplete
    };
  },

  dispatch => ({
    onChangeCitySearch: query => {
      dispatch(setAutocompleteQuery(query));
    },

    onChangeActivePosition: position => {
      dispatch(setActivePosition(position));
    }
  })
)(CitySearch);
