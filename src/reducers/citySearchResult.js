import {
  CITY_SEARCH_REQUEST,
  CITY_SEARCH_SUCCESS,
  CITY_SEARCH_FAILURE
} from '../actions/citySearch';

const initialState = {isLoading: true};

export default function citySearchResult(state = initialState, action) {
  switch (action.type) {
    case CITY_SEARCH_REQUEST: {
      return {isLoading: true};
    }
    case CITY_SEARCH_SUCCESS: {
      return action.payload;
    }
    case CITY_SEARCH_FAILURE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
