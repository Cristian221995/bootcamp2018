import { combineReducers } from 'redux';
import nav from './navReducer';
import TimelineReducer from '../reducers/timelineReducer';
import SearchReducer from '../reducers/searchReducer';
import ConfigReducer from '../reducers/configReducer';

const AppReducer = combineReducers({  //contains all app's reducers
  nav,
  TimelineReducer,
  SearchReducer,
  ConfigReducer,
});

export default AppReducer;