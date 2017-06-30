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

//receive follows takes follower user and author user
// receive follows goes in both user and session reducer

export const updateUserFollows = (userAttributes, id) => dispatch => {
  return APIUtil.updateUserFollows(userAttributes, id)
    .then(user => {
      return dispatch(receiveSingleUser(user));
    });
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

export const follow = (id) => dispatch => {
  return APIUtil.follow(id)
    .then(user => {
      return dispatch(receiveSingleUser(user));
    });
};

export const unFollow = (id) => dispatch => {
  return APIUtil.unFollow(id)
    .then(user => {
      return dispatch(receiveSingleUser(user));
    });
};
