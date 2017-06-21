import * as APIUtil from '../util/story_util';

export const RECEIVE_STORIES = 'RECEIVE_STORIES';
export const RECEIVE_SINGLE_STORY = 'RECEIVE_SINGLE_STORY';
export const UPDATE_STORY = 'UPDATE_STORY';
export const DELETE_STORY = 'DELETE_STORY';
export const CREATE_STORY = 'CREATE_STORY';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveStories = (stories) => {
  return {
    type: RECEIVE_STORIES,
    stories
  };
};

export const receiveSingleStory = story => {
  return {
    type: RECEIVE_SINGLE_STORY,
    story
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const addStory = story => {
  return {
    type: CREATE_STORY,
    story
  };
};

export const deleteStory = story => {
  return {
    type: DELETE_STORY,
    story
  };
};

export const update = story => {
  return {
    type: UPDATE_STORY,
    story
  };
};

export const fetchStories = () => {
  return APIUtil.fetchStories()
    .then(stories => {
      return dispatch(receiveStories(stories));
    });
};

export const fetchSingleStory = (id) => {
  return APIUtil.fetchSingleStory(id)
    .then(story => {
      return dispatch(receiveStory(story));
    });
};

export const updateStory = (newStory, id) => {
  return APIUtil.fetchSingleStory(newStory, id)
    .then(story => {
      return dispatch(update(story));
    });
};

export const createStory = (story) => {
  return APIUtil.createStory(story)
    .then(story => {
      return dispatch({
        type: CREATE_STORY,
        story
      });
    });
};

export const destroyStory = id => {
  return APIUtil.destroyStory(id).then((story) => {
    return dispatch(deleteStory(story));
  });
};
