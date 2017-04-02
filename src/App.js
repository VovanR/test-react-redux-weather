import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import {getGeolocation} from './ducks/geolocation';
import {getWeather} from './ducks/weather';
import Footer from './components/Footer';
import CitySearch from './components/CitySearch';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';
import Item from './components/Item';

class App extends Component {
  componentWillMount(){
    if (this.props.activeCity) {
      this.props.onGetWeather(this.props.activeCity);
      return;
    }
    this.props.onGetGeolocation();
  }

  render() {
    const {
      activeCity,
      geolocation,
      weather,
      isLoading,
      errorMessage
    } = this.props;

    if (activeCity && weather.data) {
      return (
        <div className="app">
          {weather.data.map((item, index) => (
            <Item
                key={index}
                {...item}
                />
          ))}

          <Footer/>
        </div>
      );
    }

    if (geolocation.error || (!geolocation.isLoading && !activeCity)) {
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
      activeCity,
      geolocation,
      weather
    } = state;

    return {
      activeCity,
      isLoading: geolocation.isLoading || weather.isLoading,
      errorMessage: geolocation.error || weather.error,
      geolocation,
      weather
    };
  },

  dispatch => ({
    onGetGeolocation: () => {
      dispatch(getGeolocation())
    },

    onGetWeather: (position) => {
      dispatch(getWeather(position))
    }
  })
)(App);
