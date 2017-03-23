import {
  GET_CITY_REQUEST,
  GET_CITY_SUCCESS,
  GET_CITY_FAILURE
} from '../actions/city';

const initialState = {isLoading: true};

export default function city(state = initialState, action) {
  switch (action.type) {
    case GET_CITY_REQUEST: {
      return {isLoading: true};
    }
    case GET_CITY_SUCCESS: {
      return action.payload;
    }
    case GET_CITY_FAILURE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
