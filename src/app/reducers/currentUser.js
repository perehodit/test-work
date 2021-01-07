export default function currentUserReducer(state = null, action) {
  switch (action.type) {
    case 'currentUser/userChanged': {
      return action.payload;
    }
    default:
      return state;
  }
}
