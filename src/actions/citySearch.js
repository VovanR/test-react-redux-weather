import {AUTOCOMPLETE_API_URL} from '../const';

export const SET_CITY_SEARCH_QUERY = 'SET_CITY_SEARCH_QUERY';
export const CLEAR_CITY_SEARCH_QUERY = 'CLEAR_CITY_SEARCH_QUERY';
export const CITY_SEARCH_REQUEST = 'CITY_SEARCH_REQUEST';
export const CITY_SEARCH_SUCCESS = 'CITY_SEARCH_SUCCESS';
export const CITY_SEARCH_FAILURE = 'CITY_SEARCH_FAILURE';

export const setCitySearchQuery = query => dispatch => {
  dispatch({
    type: SET_CITY_SEARCH_QUERY,
    payload: query
  });

  dispatch(searchCity(query));
};

export const clearCitySearchQuery = () => dispatch => {
  dispatch({type: CLEAR_CITY_SEARCH_QUERY});
};

export const searchCity = query => dispatch => {
  dispatch({type: CITY_SEARCH_REQUEST});

  const request = new Request(`${AUTOCOMPLETE_API_URL}aq?query=${query}`);

  fetch(request)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: CITY_SEARCH_SUCCESS,
        payload: {data: processSearchResponse(data)}
      });
    })
    .catch(error => {
      dispatch({
        type: CITY_SEARCH_FAILURE,
        payload: {error: error.message}
      });
    });
};

function processSearchResponse(data) {
  return data.RESULTS.map(item => ({
    id: item.ll,
    name: item.name,
    lat: item.lat,
    lng: item.lon
  }));
}
