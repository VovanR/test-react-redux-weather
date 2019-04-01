import React, {Component} from 'react';
import {connect} from 'react-redux';
import DebounceInput from 'react-debounce-input';
import {setAutocompleteQuery} from '../../ducks/autocomplete';
import {setActivePosition} from '../../ducks/activePosition';
import CitySearchList from '../../components/CitySearchList';
import Footer from '../Footer';
import './index.css';

class CitySearch extends Component {
  handleChangeQuery = (e) => {
    this.props.onChangeCitySearch(e.target.value);
  };

  handleClickCity = (position) => {
    this.props.onChangeActivePosition(position);
  };

  render() {
    const {
      autocomplete
    } = this.props;

    return (
      <div className="city-search">
        <DebounceInput
          className="city-search__input"
          minLength={2}
          debounceTimeout={500}
          placeholder="City"
          type="search"
          value={autocomplete.query}
          onChange={this.handleChangeQuery}
          autoFocus
        />

        {autocomplete && autocomplete.data && (
          <CitySearchList
            data={autocomplete.data}
            onClickCity={this.handleClickCity}
          />
        )}

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
