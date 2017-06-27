
import { combineReducers } from "redux";
import session from './session_reducer';
import presentation from './presentational_reducer';
import users from './users_reducer';
import stories from './stories_reducer';
import comments from './comments_reducer';

const rootReducer = combineReducers({
  session,
  presentation,
  users,
  stories,
  comments,
});

export default rootReducer;
