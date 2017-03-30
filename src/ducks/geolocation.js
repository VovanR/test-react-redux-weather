import {setActiveCity} from './activeCity';

const REQUEST = 'geolocation/REQUEST';
const SUCCESS = 'geolocation/SUCCESS';
const FAILURE = 'geolocation/FAILURE';

const initialState = {isLoading: true};

export default function geolocation(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {isLoading: true};
    case SUCCESS:
    case FAILURE:
      return action.payload;
    default:
      return state;
  }
}

export const getGeolocation = () => dispatch => {
  dispatch({type: REQUEST});

  function geoSuccess(data) {
    const {
      latitude: lat,
      longitude: lng
    } = data.coords;
    const position = {lat, lng};

    dispatch({
      type: SUCCESS,
      payload: {position}
    });

    dispatch(setActiveCity(position))
  }

  function geoFailure(error) {
    dispatch({
      type: FAILURE,
      payload: {
        error: error.message
      }
    });
  }

  if ('geolocation' in window.navigator) {
    window.navigator.geolocation.getCurrentPosition(geoSuccess, geoFailure);
  } else {
    geoFailure({message: 'Geolocation is not supported by your browser'});
  }
};
