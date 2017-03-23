import {
  GET_WEATHER_REQUEST,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILURE
} from '../actions/weather';

const initialState = {isLoading: true};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_REQUEST: {
      return {isLoading: true};
    }
    case GET_WEATHER_SUCCESS: {
      return action.payload;
    }
    case GET_WEATHER_FAILURE: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
