const initialState = [];

export default function weather(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case 'FETCH_WEATHER_SUCCESS': {
      return action.payload;
    }
    case 'FETCH_WEATHER_FAIL': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
