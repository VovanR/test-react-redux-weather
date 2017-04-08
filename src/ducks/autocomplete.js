import fetchJsonp from 'fetch-jsonp';

import {AUTOCOMPLETE_API_URL} from '../constants/api';

const REQUEST = 'autocomplete/REQUEST';
const SUCCESS = 'autocomplete/SUCCESS';
const FAILURE = 'autocomplete/FAILURE';
const QUERY = 'autocomplete/QUERY';

const initialState = {
  isLoading: false,
  query: '',
  data: []
};

export default function autocomplete(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {...state, isLoading: true};
    case SUCCESS:
      return {...state, data: action.payload};
    case FAILURE:
      return {...state, error: action.payload};
    case QUERY:
      return {...state, query: action.payload};
    default:
      return state;
  }
}

export const getAutocomplete = query => dispatch => {
  dispatch({type: REQUEST});

  fetchJsonp(`${AUTOCOMPLETE_API_URL}aq?query=${query}`, {
    jsonpCallback: 'cb'
  })
    .then(response => response.json())
    .then(processResponse)
    .then(data => {
      dispatch({
        type: SUCCESS,
        payload: data
      });
    })
    .catch(error => {
      dispatch({
        type: FAILURE,
        payload: {error: error.message}
      });
    });
};

function processResponse(data) {
  return data.RESULTS.map(item => ({
    id: item.ll + item.name,
    name: item.name,
    position: {
      lat: item.lat,
      lng: item.lon
    }
  }));
}

export const setAutocompleteQuery = query => dispatch => {
  dispatch({
    type: QUERY,
    payload: query
  });

  dispatch(getAutocomplete(query));
};
