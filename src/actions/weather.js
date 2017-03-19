export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

const URL = 'https://api.wunderground.com/api/';
const API_ID = '291bda72a5d7ba60';

export const getWeather = position => dispatch => {
  dispatch({
    type: FETCH_WEATHER_REQUEST,
    payload: {isLoading: true}
  });

  const params = [
    API_ID,
    'hourly',
    'q',
    position
  ];
  const paramsString = params.join('/');
  const request = new Request(`${URL}${paramsString}.json`);

  fetch(request)
    .then(response => response.json())
    .then(processData)
    .then(data => {
      dispatch({
        type: FETCH_WEATHER_SUCCESS,
        payload: {data}
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_WEATHER_FAILURE,
        payload: {error: error.message}
      });
    });
};

function processData(data) {
  return data.hourly_forecast.reduce((a, b) => {
    a.push({
      hour: parseInt(b.FCTTIME.hour, 10),
      iconUrl: b.icon_url,
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
