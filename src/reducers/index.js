import {combineReducers} from 'redux';

import city from './city';
import weather from './weather';

export default combineReducers({
  city,
  weather
});
