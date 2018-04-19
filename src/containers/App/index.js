import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars';
import {getGeolocation} from '../../ducks/geolocation';
import {getWeather} from '../../ducks/weather';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import ItemDate from '../../components/ItemDate';
import Item from '../../components/Item';
import CitySearch from '../CitySearch';
import Footer from '../Footer';
import './index.css';

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

    if (activePosition && weather.data.length) {
      let currentDate = null

      return (
        <div className="app">
          <Scrollbars autoHide>
            <div className="app__content">
              {weather.data.reduce((acc, current, index) => {
                const {
                  day,
                  weekday
                } = current

                if (currentDate !== day) {
                  currentDate = day
                  const key = currentDate + weekday

                  acc.push(
                    <ItemDate
                      key={key}
                      day={day}
                      weekday={weekday}
                      />
                  )
                }

                acc.push(
                  <Item
                      key={index}
                      {...current}
                      />
                );

                return acc;
              }, [])}

              <Footer/>
            </div>
          </Scrollbars>
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
