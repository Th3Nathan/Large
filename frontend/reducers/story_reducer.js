import {
  RECEIVE_USERS
} from '../actions/user_actions';
import { merge } from 'lodash';

const defaultState = {};

const usersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state.users);
  switch (action.type) {
    case RECEIVE_USERS:
      return merge(newState, action.users);
    default:
      return newState;
  }
};

export default usersReducer;
