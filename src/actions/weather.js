import {API_ID, WEATHER_API_URL} from '../const';

export const GET_WEATHER_REQUEST = 'GET_WEATHER_REQUEST';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_WEATHER_FAILURE = 'GET_WEATHER_FAILURE';

export const getWeather = position => dispatch => {
  dispatch({type: GET_WEATHER_REQUEST});

  const params = [
    API_ID,
    'hourly',
    'q',
    position
  ];
  const paramsString = params.join('/');
  const request = new Request(`${WEATHER_API_URL}${paramsString}.json`);

  fetch(request)
    .then(response => response.json())
    .then(processData)
    .then(data => {
      dispatch({
        type: GET_WEATHER_SUCCESS,
        payload: {data}
      });
    })
    .catch(error => {
      dispatch({
        type: GET_WEATHER_FAILURE,
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
      windSpeed: kmphToMph(b.wspd.metric)
    });

    return a;
  }, []);
}

function kmphToMph(kmph) {
  return Math.round(parseInt(kmph, 10) * 1000 / 3600);
}
