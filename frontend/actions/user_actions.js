import * as APIUtil from '../util/session_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  };
};

export const receiveSingleUser = user => {
  return {
    type: RECEIVE_SINGLE_USER,
    user
  };
};



export const fetchUsers = () => dispatch => {
  return APIUtil.fetchUsers()
    .then(users => {
      return dispatch(receiveUsers(users));
    });
};

export const fetchSingleUser = (id) => dispatch => {
  return APIUtil.fetchSingleUser(id)
    .then(user => {
      return dispatch(receiveSingleUser(user));
    });
};
