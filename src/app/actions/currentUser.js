export const setCurrentUser = id => {
  return {
    type: 'currentUser/userChanged',
    payload: id,
  };
};
