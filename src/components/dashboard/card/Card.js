import './Card.scss';
import CardLogo from './CardLogo';
import { paths } from '../../../app/routes';
import { useHistory } from 'react-router-dom';

function Card(props) {
  const history = useHistory();

  return (
    <div
      className="card"
      onClick={() => history.push(`${paths.dashboard.card}/${props.card.id}`)}
    >
      <CardLogo card={props.card}></CardLogo>
      <span className="cardName">{props.card.name}</span>
      <span className="cardDescription">{props.card.description}</span>
    </div>
  );
}

export default Card;
