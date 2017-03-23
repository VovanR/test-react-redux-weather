import {combineReducers} from 'redux';

import city from './city';
import weather from './weather';
import searchCity from './searchCity';

import citySearchQuery from './citySearchQuery';
import citySearchResult from './citySearchResult';
import activeCity from './activeCity';

export default combineReducers({
  city,
  searchCity,
  weather,

  citySearchQuery,
  citySearchResult,
  activeCity
});
