import cards from '../../cards/cards';
import Card from '../../components/dashboard/card/Card.js';
import './Main.scss';
import { useSelector } from 'react-redux';

function Main() {
  const currentUserId = useSelector(store => store.currentUser);
  const currentUser = useSelector(store =>
    store.users.find(user => {
      if (user.id === currentUserId) {
        return true;
      }

      return false;
    })
  );

  const cardsIds = currentUser
    ? currentUser.cards
    : cards.reduce((a, b) => {
        return a.concat([b.id]);
      }, []);

  return (
    <div className="main">
      {cards
        .filter(card => {
          if (cardsIds.includes(card.id)) {
            return card;
          }

          return false;
        })
        .map(card => {
          return <Card key={card.id} card={card}></Card>;
        })}
    </div>
  );
}

export default Main;
