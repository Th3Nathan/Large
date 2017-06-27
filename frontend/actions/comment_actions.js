import * as APIUtil from '../util/comment_util';


export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const addComment = comment => {
  return {
    type: CREATE_COMMENT,
    comment
  };
};

export const deleteComment = comment => {
  return {
    type: DELETE_COMMENT,
    comment
  };
};

export const update = comment => {
  return {
    type: UPDATE_COMMENT,
    comment
  };
};

export const receiveSingleComment = comment => {
  return {
    type:  RECEIVE_COMMENT,
    comment
  };
};

export const fetchSingleComment = (id) => dispatch => {
  return APIUtil.fetchSingleComment(id)
    .then(comment => {
      return dispatch(receiveSingleComment(comment));
    });
};

export const updateComment = (newComment, id) => dispatch => {
  return APIUtil.updateComment(newComment, id)
    .then(comment => {
      return dispatch(update(comment));
    });
};

export const createComment = (comment) => dispatch => {
  return APIUtil.createComment(comment)
    .then(comment => {return dispatch(addComment(comment));
    });
};

export const destroyComment = id => dispatch => {
  return APIUtil.removeComment(id).then((comment) => {
    return dispatch(deleteComment(comment));
  });
};
