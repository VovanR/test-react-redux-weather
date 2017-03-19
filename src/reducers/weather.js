const initialState = [];

export default function weather(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_WEATHER_SUCCESS': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
