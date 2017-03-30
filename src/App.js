import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import {getGeolocation} from './ducks/geolocation';
import ApiCredits from './components/ApiCredits';
import CitySearch from './components/CitySearch';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';
import Item from './components/Item';

class App extends Component {
  componentWillMount(){
    this.props.onGetGeolocation();
  }

  render() {
    const {
      geolocation,
      weather,
      isLoading,
      errorMessage
    } = this.props;

    if (weather.data) {
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

    if (geolocation.error) {
      return <CitySearch/>;
    }

    if (errorMessage) {
      return <ErrorMessage message={errorMessage}/>;
    }

    if (isLoading) {
      return <Loading/>;
    }

    return null;
  }
}

export default connect(
  state => {
    const {
      geolocation,
      weather
    } = state;

    return {
      isLoading: geolocation.isLoading || weather.isLoading,
      errorMessage: geolocation.error || weather.error,
      geolocation,
      weather
    };
  },

  dispatch => ({
    onGetGeolocation: () => {
      dispatch(getGeolocation())
    }
  })
)(App);
