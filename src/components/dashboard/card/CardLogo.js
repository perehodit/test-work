import './CardLogo.scss';

function CardLogo(props) {
  return (
    <div style={props.wrapperStyle} className="cardIconWrapper">
      <img
        style={props.imageStyle}
        className="cardIcon"
        src={`${process.env.PUBLIC_URL}/img/cards/${props.card.id}.svg`}
        alt={`${props.card.name} logo.`}
      />
    </div>
  );
}

export default CardLogo;
