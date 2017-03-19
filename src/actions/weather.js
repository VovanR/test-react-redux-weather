const URL = 'http://api.wunderground.com/api/';

export const getWeather = () => dispatch => {
  const params = [
    '291bda72a5d7ba60',
    'hourly',
    'q',
    'Russia',
    'Saint_Petersburg'
  ];
  const paramsString = params.join('/');
  const request = new Request(`${URL}${paramsString}.json`);

  fetch(request)
    .then(response => response.json())
    .then(processData)
    .then(data => {
      dispatch({
        type: 'FETCH_WEATHER_SUCCESS',
        payload: data
      });
    })
    .catch(error => console.log(error.message));
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
