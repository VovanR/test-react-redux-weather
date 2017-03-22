import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import {getCity, searchCity} from './actions/city';
import ApiCredits from './components/ApiCredits';
import SearchCity from './components/SearchCity';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';
import Item from './components/Item';

class App extends Component {
  componentWillMount(){
    this.props.onGetCity();
  }

  render() {
    const {
      city,
      weather,
      isLoading,
      errorMessage
    } = this.props;

    if (city.error) {
      return <SearchCity/>;
    }

    if (errorMessage) {
      return <ErrorMessage message={errorMessage}/>;
    }

    if (isLoading) {
      return <Loading/>;
    }

    return (
      <div className="app">
				{weather.data.map((item, index) => (
          <Item
							key={index}
							{...item}
							/>
				))}

        <ApiCredits/>
      </div>
    );
  }
}

export default connect(
  state => {
    const {
      city,
      searchCity,
      weather
    } = state;

    return {
      isLoading: city.isLoading || weather.isLoading,
      errorMessage: city.error || weather.error,
      city,
      searchCity,
      weather
    };
  },

  dispatch => ({
    onGetCity: () => {
      dispatch(getCity())
    },

    onSearchCity: query => {
      dispatch(searchCity(query))
    }
  })
)(App);
