import cards from '../../cards/cards';

function getRandomCardsId() {
  const randomCardsIdsSet = new Set([]);
  // RANDOM CARDS COUNT
  const randomItemsCount = 5;

  for (;;) {
    const randomIndex = Math.floor(Math.random() * cards.length);
    randomCardsIdsSet.add(cards[randomIndex].id);
    if (randomCardsIdsSet.size === randomItemsCount) {
      break;
    }
  }

  return Array.from(randomCardsIdsSet);
}

function nextUserId(users) {
  const maxId = users.reduce((maxId, user) => Math.max(user.id, maxId), -1);
  return maxId + 1;
}

export default function usersReducer(state = [], action) {
  switch (action.type) {
    case 'users/userAdded': {
      return [
        ...state,
        {
          id: nextUserId(state),
          name: action.payload.name,
          surname: action.payload.surname,
          about: action.payload.about,
          gender: action.payload.gender,
          age: action.payload.age,
          cards: getRandomCardsId(),
        },
      ];
    }
    case 'users/userChanged': {
      return state.map(user => {
        if (user.id !== action.payload.id) {
          return user;
        }

        console.log(action.payload.user);

        return {
          ...user,
          ...action.payload.user,
        };
      });
    }
    case 'users/userRemoved': {
      return state.filter(user => {
        if (user.id === action.payload) {
          return false;
        }

        return true;
      });
    }
    default:
      return state;
  }
}
