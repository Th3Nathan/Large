export const signUp = formData => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    contentType: false,
    processData: false,
    data: formData,
  });
};


export const signIn = formData => {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    contentType: false,
    processData: false,
    data: formData,
  });
};

export const logOut = () => {
  return $.ajax({
    method: "DELETE",
    url: "/api/session",
  });
};

export const fetchUsers = () => {
  return $.ajax({
    method: 'GET',
    url: "api/users",
  });
};

export const fetchSingleUser = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
  });
};

export const updateUser = (formData, id) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    contentType: false,
    processData: false,
    data: formData
  });
};

export const updateUserFollows = (userAttributes, id) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${id}`,
    data: {user: { followed_author_follows_attributes: userAttributes }  },
  });
};

export const follow = (id) => {
  return $.ajax({method: "POST", url: `api/users/${id}/follow`});
};

export const unFollow = (id) => {
  return $.ajax({method: "POST", url: `api/users/${id}/unfollow`});
};
