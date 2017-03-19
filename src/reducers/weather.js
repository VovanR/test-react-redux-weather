import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE
} from '../actions/weather';

const initialState = {isLoading: true};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST: {
      return action.payload;
    }
    case FETCH_WEATHER_SUCCESS: {
      return action.payload;
    }
    case FETCH_WEATHER_FAILURE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
