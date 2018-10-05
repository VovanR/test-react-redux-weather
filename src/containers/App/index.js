import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Scrollbars} from 'react-custom-scrollbars';
import hourToDayOrNight from 'hour-to-day-or-night';
import {getGeolocation} from '../../ducks/geolocation';
import {getWeather} from '../../ducks/weather';
import ErrorMessage from '../../components/ErrorMessage';
import Loading from '../../components/Loading';
import ItemDate from '../../components/ItemDate';
import Item from '../../components/Item';
import CitySearch from '../CitySearch';
import Footer from '../Footer';
import './index.css';

// Show first date when there are more than 4 hours left until the new day
const FIRST_DATE_HOURS_LEFT_LIMIT = 4

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
                  hour,
                  day,
                  weekday
                } = current;

                const partOfDay = hourToDayOrNight(hour);

                const showFirstDate = currentDate === null && hour < (24 - FIRST_DATE_HOURS_LEFT_LIMIT)
                const showDate = currentDate !== null && currentDate !== day

                if (showDate || showFirstDate) {
                  currentDate = day;
                  const key = currentDate + weekday;

                  acc.push(
                    <ItemDate
                      key={key}
                      day={day}
                      weekday={weekday}
                      variant={partOfDay}
                      />
                  );
                }

                acc.push(
                  <Item
                      key={index}
                      variant={partOfDay}
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
      return <Loading status={geolocation.isLoading ? 'waiting' : 'loading'}/>;
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
