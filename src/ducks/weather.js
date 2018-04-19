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
  return data.hourly_forecast.reduce((acc, current) => {
    const temperature = parseInt(current.temp.metric, 10);
    const windSpeed = kmphToMps(current.wspd.metric);
    const isComfort = isComfortWeather({
      condition: current.condition,
      temperature,
      windSpeed
    });

    acc.push({
      weekday: current.FCTTIME.weekday_name,
      day: parseInt(current.FCTTIME.mday, 10),
      hour: parseInt(current.FCTTIME.hour, 10),
      iconUrl: current.icon_url.replace(/^http:/, 'https:'),
      windDegree: parseInt(current.wdir.degrees, 10),
      windDirection: current.wdir.dir,
      windSpeed,
      temperature,
      isComfort
    });

    return acc;
  }, []);
}
