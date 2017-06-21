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
