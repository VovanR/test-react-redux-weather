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
    if (this.props.activePosition) {
      this.props.onGetWeather(this.props.activePosition);
      return;
    }
    this.props.onGetGeolocation();
  }

  render() {
    const {
      activePosition,
      geolocation,
      weather,
      isLoading,
      errorMessage
    } = this.props;

    if (activePosition && weather.data) {
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

    if (geolocation.error || (!geolocation.isLoading && !activePosition)) {
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
      activePosition,
      geolocation,
      weather
    } = state;

    return {
      activePosition,
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
