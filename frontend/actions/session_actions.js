import * as APIUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const SCRUB_ERRORS = 'SCRUB_ERRORS';
export const UPDATE_DRAFT = 'UPDATE_DRAFT';
export const REMOVE_DRAFT = 'REMOVE_DRAFT';

export const updateDraft = newDraft => {
  return {
    type: UPDATE_DRAFT,
    newDraft
  };
};

export const removeDraft = () => {
  return {
    type: REMOVE_DRAFT
  };
};

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
     currentUser
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
     errors
  };
};

export const scrubErrors = () => {
  return {
    type: SCRUB_ERRORS
  };
};

//Thunk actions

export const updateUser = (user, id) => dispatch => {
  return APIUtil.updateUser(user, id)
    .then(user => {
      return dispatch(receiveCurrentUser(user));
    });
};

export const signIn = user => dispatch => {
  return APIUtil.signIn(user)
    .then(user => {
      return dispatch(receiveCurrentUser(user));
    }, err => dispatch(receiveErrors(err.responseJSON)));
};

export const signUp = user => dispatch => {
  return APIUtil.signUp(user)
    .then(user => {
      return dispatch(receiveCurrentUser(user));
    }, err => dispatch(receiveErrors(err.responseJSON)));
};

export const logOut = () => dispatch => {
  return APIUtil.logOut()
    .then(() => {
      return dispatch(receiveCurrentUser(null));
    });
};
