import getIcon from './IconsList';

function Icon(props) {
  return (
    <svg
      onClick={props.onClick}
      viewBox={props.viewBox || '0 0 512 512'}
      className="icon"
      style={{ width: props.width || 'auto', height: props.height || '18px' }}
    >
      <g fill={props.color || '#000000'}>
        {getIcon(props.name).map((path, index) => {
          return <path key={index} d={path}></path>;
        })}
      </g>
    </svg>
  );
}

export default Icon;
