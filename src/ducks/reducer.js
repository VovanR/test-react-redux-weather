import {combineReducers} from 'redux';

import geolocation from './geolocation';
import weather from './weather';
import autocomplete from './autocomplete';

import activeCity from './activeCity';

export default combineReducers({
  geolocation,
  autocomplete,
  weather,

  activeCity
});
