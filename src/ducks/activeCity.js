import {getWeather} from './weather';

const SET = 'activeCity/SET';

const initialState = null;
// const initialState = loadActiveCity();

export default function activeCity(state = initialState, action) {
  switch (action.type) {
    case SET:
      return action.payload;
    default:
      return state;
  }
}

export const setActiveCity = position => dispatch => {
  window.localStorage.setItem('activeCity', JSON.stringify(position));

  dispatch({
    type: SET,
    payload: position
  });

  dispatch(getWeather(position));
};

// function loadActiveCity() {
//   try {
//     const serialized = localStorage.getItem('activeCity');
//     if (serialized === null) {
//       return null;
//     }
//     return JSON.parse(serialized);
//   } catch (err) {
//     return null;
//   }
// };
