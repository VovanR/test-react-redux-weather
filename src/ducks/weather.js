import {isComfortWeather} from '../utils/weather';
import kmphToMps from '../utils/kmphToMps';
import {API_ID, WEATHER_API_URL} from '../constants/api';

const REQUEST = 'weather/REQUEST';
const SUCCESS = 'weather/SUCCESS';
const FAILURE = 'weather/FAILURE';

const initialState = {
  isLoading: false,
  error: null,
  data: []
};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {...state, isLoading: true};
    case SUCCESS:
    case FAILURE:
      return {...state, isLoading: false, ...action.payload};
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
    const temperature = parseInt(b.temp.metric, 10);
    const windSpeed = kmphToMps(b.wspd.metric);
    const isComfort = isComfortWeather({
      condition: b.condition,
      temperature,
      windSpeed
    });

    a.push({
      hour: parseInt(b.FCTTIME.hour, 10),
      iconUrl: b.icon_url.replace(/^http:/, 'https:'),
      windDegree: parseInt(b.wdir.degrees, 10),
      windDirection: b.wdir.dir,
      windSpeed,
      temperature,
      isComfort
    });

    return a;
  }, []);
}
