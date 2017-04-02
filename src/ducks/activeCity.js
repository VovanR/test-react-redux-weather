import {getWeather} from './weather';

const SET = 'activeCity/SET';
const CLEAR = 'activeCity/CLEAR';

const initialState = loadActiveCity();

export default function activeCity(state = initialState, action) {
  switch (action.type) {
    case SET:
      return action.payload;
    case CLEAR:
      return null;
    default:
      return state;
  }
}

export const setActiveCity = position => dispatch => {
  localStorage.setItem('activeCity', JSON.stringify(position));

  dispatch({
    type: SET,
    payload: position
  });

  dispatch(getWeather(position));
};

export const clearActiveCity = () => dispatch => {
  localStorage.removeItem('activeCity');
  dispatch({type: CLEAR});
};

function loadActiveCity() {
  try {
    const serialized = localStorage.getItem('activeCity');
    if (serialized === null) {
      return null;
    }
    return JSON.parse(serialized);
  } catch (err) {
    return null;
  }
};
