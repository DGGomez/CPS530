import { combineReducers } from 'redux';

import allfiles from './readReducer';
import auth from './userReducer';
import order from './orderReducer';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  allfiles,
  auth,
  order
});

export default rootReducer;