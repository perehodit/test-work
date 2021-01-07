import users from './users';
import currentUser from './currentUser';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  users,
  currentUser,
});

export default rootReducer;
