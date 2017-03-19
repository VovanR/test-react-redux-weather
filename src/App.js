import React, {Component} from 'react';
import {connect} from 'react-redux';

import './App.css';
import {getWeather} from './actions/weather';
import ApiCredits from './components/ApiCredits';
import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';
import Item from './components/Item';

class App extends Component {
  componentWillMount(){
    this.props.onGetWeather();
  }

  render() {
    const {weather} = this.props;

    if (weather.error) {
      return <ErrorMessage message={weather.error}/>;
    }

    if (!weather.length) {
      return <Loading/>;
    }

    return (
      <div className="app">
				{weather.map((item, index) => (
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
  state => ({
    weather: state.weather
  }),
  dispatch => ({
    onGetWeather: () => {
      dispatch(getWeather())
    }
  })
)(App);
