import {combineReducers} from 'redux';

import geolocation from './geolocation';
import weather from './weather';
import autocomplete from './autocomplete';
import activePosition from './activePosition';

export default combineReducers({
  geolocation,
  autocomplete,
  weather,
  activePosition
});
