
import { combineReducers } from "redux";
import session from './session_reducer';
import presentation from './presentational_reducer';
import users from './users_reducer';

const rootReducer = combineReducers({
  session,
  presentation,
  users
});

export default rootReducer;
