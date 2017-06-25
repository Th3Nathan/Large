import {
  RECEIVE_USERS,
  RECEIVE_SINGLE_USER
} from '../actions/user_actions';
import { merge } from 'lodash';

const defaultState = {all: {}, showed: {}};

const usersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state.users);

  switch (action.type) {
    case RECEIVE_USERS:
      return merge(newState, {all: action.users});

    case RECEIVE_SINGLE_USER:
      return merge(newState, {showed: action.user});
    default:
      return newState;
  }
};

export default usersReducer;
