import {
  SET_ACTIVE_CITY
} from '../actions/city';

const initialState = null;

export default function citySearch(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_CITY: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
