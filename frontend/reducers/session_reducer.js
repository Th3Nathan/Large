import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  SCRUB_ERRORS,
  UPDATE_DRAFT,
  REMOVE_DRAFT
} from '../actions/session_actions';
import {
  receiveCurrentUser,
  receiveErrors,
  updateDraft,
  removeDraft
} from '../actions/session_actions';

import { merge } from 'lodash';

const defaultState = {
    currentUser: null,
    errors: [],
    draft: {}
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

    case UPDATE_DRAFT:
      newState.draft = action.newDraft;
      return newState;

    case REMOVE_DRAFT:
      newState.draft = {};
      return newState;

    default:
      return state;
  }
};

export default sessionReducer;
