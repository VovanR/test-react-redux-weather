import {kmphToMps} from '../utils';
import {API_ID, WEATHER_API_URL} from '../constants/api';

const REQUEST = 'weather/REQUEST';
const SUCCESS = 'weather/SUCCESS';
const FAILURE = 'weather/FAILURE';

const initialState = {isLoading: false};

export default function weather(state = initialState, action) {
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

export const getWeather = position => dispatch => {
  dispatch({type: REQUEST});

  const params = [
    API_ID,
    'hourly',
    'q',
    `${position.lat},${position.lng}`
  ];
  const paramsString = params.join('/');

  fetch(`${WEATHER_API_URL}${paramsString}.json`)
    .then(response => response.json())
    .then(processData)
    .then(data => {
      dispatch({
        type: SUCCESS,
        payload: {data}
      });
    })
    .catch(error => {
      dispatch({
        type: FAILURE,
        payload: {error: error.message}
      });
    });
};

function processData(data) {
  return data.hourly_forecast.reduce((a, b) => {
    a.push({
      hour: parseInt(b.FCTTIME.hour, 10),
      iconUrl: b.icon_url.replace(/^http:/, 'https:'),
      temp: parseInt(b.temp.metric, 10),
      windDegree: parseInt(b.wdir.degrees, 10),
      windDirection: b.wdir.dir,
      windSpeed: kmphToMps(b.wspd.metric)
    });

    return a;
  }, []);
}
