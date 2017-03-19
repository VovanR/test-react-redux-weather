import {getWeather} from './weather';

export const FETCH_CITY_REQUEST = 'FETCH_CITY_REQUEST';
export const FETCH_CITY_SUCCESS = 'FETCH_CITY_SUCCESS';
export const FETCH_CITY_FAILURE = 'FETCH_CITY_FAILURE';

export const getCity = () => dispatch => {
  dispatch({
    type: FETCH_CITY_REQUEST,
    payload: {isLoading: true}
  });

  function geoSuccess(position) {
    const {
      latitude,
      longitude
    } = position.coords;
    const data = `${latitude},${longitude}`;

    dispatch({
      type: FETCH_CITY_SUCCESS,
      payload: {data}
    });

    dispatch(getWeather(data));
  }

  function geoFailure(error) {
    dispatch({
      type: FETCH_CITY_FAILURE,
      payload: {
        error: error.message
      }
    });
  }

  if ('geolocation' in window.navigator) {
    window.navigator.geolocation.getCurrentPosition(geoSuccess, geoFailure);
  } else {
    geoFailure();
  }
};
