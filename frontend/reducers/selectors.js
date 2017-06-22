export const usersSelector = (users) => {
  return Object.keys(users).map(key => users[key] );
};

export const storiesSelector = (stories) => {
  return Object.keys(stories).map(key => stories[key] );
};
