import {combineReducers} from 'redux';

import city from './city';
import weather from './weather';
import searchCity from './searchCity';

export default combineReducers({
  city,
  searchCity,
  weather
});
