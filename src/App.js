import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import {getCity} from './actions/city';
import ApiCredits from './components/ApiCredits';
import CitySearch from './components/CitySearch';
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
      return <CitySearch/>;
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
      weather
    } = state;

    return {
      isLoading: city.isLoading || weather.isLoading,
      errorMessage: city.error || weather.error,
      city,
      weather
    };
  },

  dispatch => ({
    onGetCity: () => {
      dispatch(getCity())
    }
  })
)(App);
