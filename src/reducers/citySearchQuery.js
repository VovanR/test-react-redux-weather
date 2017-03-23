import {
  SET_CITY_SEARCH_QUERY,
  CLEAR_CITY_SEARCH_QUERY
} from '../actions/citySearch';

const initialState = '';

export default function citySearchQuery(state = initialState, action) {
  switch (action.type) {
    case SET_CITY_SEARCH_QUERY: {
      return action.payload;
    }
    case CLEAR_CITY_SEARCH_QUERY: {
      return '';
    }
    default: {
      return state;
    }
  }
}
