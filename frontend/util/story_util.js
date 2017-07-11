export const createStory = formData => {
  return $.ajax({
    method: "POST",
    url: "/api/stories",
    contentType: false,
    processData: false,
    data: formData,
  });
};

export const updateStory = (formData, id) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/stories/${id}`,
    contentType: false,
    processData: false,
    data: formData,
  });
};

export const updateStoryLikes = (newLike, id) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/stories/${id}`,
    data: {story: { likes_attributes: newLike }  },
  });
};

export const updateStoryBookmarks = (newStory, id) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/stories/${id}`,
    data: {story: { bookmarks_attributes: newStory }  },
  });
};

export const removeStory = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/stories/${id}`,
  });
};

export const fetchStories = () => {
  return $.ajax({
    method: 'GET',
    url: "api/stories",
  });
};

export const fetchSingleStory = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/stories/${id}`,
  });
};

export const feed = () => {
  return $.ajax({
    method: 'POST',
    url: 'api/stories/feed'
  });
};

export const bookmarked = () => {
  return $.ajax({
    method: 'POST',
    url: 'api/stories/bookmarked'
  });
};
