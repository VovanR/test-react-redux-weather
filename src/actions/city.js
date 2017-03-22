import {getWeather} from './weather';
import {AUTOCOMPLETE_API_URL} from '../const';

export const FETCH_CITY_REQUEST = 'FETCH_CITY_REQUEST';
export const FETCH_CITY_SUCCESS = 'FETCH_CITY_SUCCESS';
export const FETCH_CITY_FAILURE = 'FETCH_CITY_FAILURE';

export const SEARCH_CITY_REQUEST = 'SEARCH_CITY_REQUEST';
export const SEARCH_CITY_SUCCESS = 'SEARCH_CITY_SUCCESS';
export const SEARCH_CITY_FAILURE = 'SEARCH_CITY_FAILURE';

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

export const searchCity = query => dispatch => {
  dispatch({
    type: SEARCH_CITY_REQUEST,
    payload: {isLoading: true}
  });

  const request = new Request(`${AUTOCOMPLETE_API_URL}/aq?query=${query}`);

  fetch(request)
    .then(response => response.json())
    .then(data => {
      console.log(data.RESULTS);
      dispatch({
        type: SEARCH_CITY_SUCCESS,
        payload: {data: data.RESULTS}
      });
    })
    .catch(error => {
      dispatch({
        type: SEARCH_CITY_FAILURE,
        payload: {error: error.message}
      });
    });
};
