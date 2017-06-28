import {
  RECEIVE_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  CREATE_COMMENT
} from '../actions/comment_actions';

import {
  RECEIVE_SINGLE_STORY
} from '../actions/story_actions';

import { merge } from 'lodash';

const defaultState = {};


const commentsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_SINGLE_STORY:
    return action.story.comments || {};

    case RECEIVE_COMMENT:
      return merge(newState, action.comment  );

    case UPDATE_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;

    case DELETE_COMMENT:
       delete newState[action.comment.id];
       return newState;

    case CREATE_COMMENT:
      merge(newState,  action.comment);
      return newState;

    default:
      return newState;
  }
};

export default commentsReducer;
