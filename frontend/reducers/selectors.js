export const usersSelector = (users) => {
  return Object.keys(users).map(key => users[key] );
};
