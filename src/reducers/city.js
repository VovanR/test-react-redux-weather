import {
  FETCH_CITY_REQUEST,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE
} from '../actions/city';

const initialState = {isLoading: true};

export default function city(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITY_REQUEST: {
      return action.payload;
    }
    case FETCH_CITY_SUCCESS: {
      return action.payload;
    }
    case FETCH_CITY_FAILURE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
