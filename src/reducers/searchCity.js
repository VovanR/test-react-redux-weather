import {
  SEARCH_CITY_REQUEST,
  SEARCH_CITY_SUCCESS,
  SEARCH_CITY_FAILURE
} from '../actions/city';

const initialState = {isLoading: true};

export default function searchCity(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CITY_REQUEST: {
      return {isLoading: true};
    }
    case SEARCH_CITY_SUCCESS: {
      return action.payload;
    }
    case SEARCH_CITY_FAILURE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
