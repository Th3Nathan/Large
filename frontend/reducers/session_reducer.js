import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  SCRUB_ERRORS
} from '../actions/session_actions';
import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {
    currentUser: null,
    errors: []
};

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      newState.errors = action.errors;
      return newState;
    case SCRUB_ERRORS:
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
