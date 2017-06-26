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
