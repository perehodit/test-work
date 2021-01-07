export const addToUsers = user => {
  return {
    type: 'users/userAdded',
    payload: user,
  };
};

export const changeInUsers = (user, id) => {
  return {
    type: 'users/userChanged',
    payload: { user, id },
  };
};

export const removeFromUsers = id => {
  return {
    type: 'users/userRemoved',
    payload: id,
  };
};
