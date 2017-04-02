import {getWeather} from './weather';

const SET = 'activePosition/SET';
const CLEAR = 'activePosition/CLEAR';

const initialState = loadActivePosition();

export default function activePosition(state = initialState, action) {
  switch (action.type) {
    case SET:
      return action.payload;
    case CLEAR:
      return null;
    default:
      return state;
  }
}

export const setActivePosition = position => dispatch => {
  localStorage.setItem('activePosition', JSON.stringify(position));

  dispatch({
    type: SET,
    payload: position
  });

  dispatch(getWeather(position));
};

export const clearActivePosition = () => dispatch => {
  localStorage.removeItem('activePosition');
  dispatch({type: CLEAR});
};

function loadActivePosition() {
  try {
    const serialized = localStorage.getItem('activePosition');
    if (serialized === null) {
      return null;
    }
    return JSON.parse(serialized);
  } catch (err) {
    return null;
  }
};
