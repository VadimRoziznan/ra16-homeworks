import { combineReducers } from 'redux';
import servicesReducer from './reducers';

const rootReducer = combineReducers({
  services: servicesReducer,
});

export default rootReducer;