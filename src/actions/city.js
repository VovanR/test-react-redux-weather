import {getWeather} from './weather';
import {AUTOCOMPLETE_API_URL} from '../const';

export const GET_CITY_REQUEST = 'GET_CITY_REQUEST';
export const GET_CITY_SUCCESS = 'GET_CITY_SUCCESS';
export const GET_CITY_FAILURE = 'GET_CITY_FAILURE';

export const SEARCH_CITY_REQUEST = 'SEARCH_CITY_REQUEST';
export const SEARCH_CITY_SUCCESS = 'SEARCH_CITY_SUCCESS';
export const SEARCH_CITY_FAILURE = 'SEARCH_CITY_FAILURE';

export const SET_ACTIVE_CITY = 'SET_ACTIVE_CITY';

export const getCity = () => dispatch => {
  dispatch({type: GET_CITY_REQUEST});

  function geoSuccess(position) {
    const {
      latitude,
      longitude
    } = position.coords;
    const data = `${latitude},${longitude}`;

    dispatch({
      type: GET_CITY_SUCCESS,
      payload: {data}
    });

    dispatch(getWeather(data));
  }

  function geoFailure(error) {
    dispatch({
      type: GET_CITY_FAILURE,
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

export const setActiveCity = cityId => dispatch => {
  dispatch({
    type: SET_ACTIVE_CITY,
    payload: cityId
  });
};
