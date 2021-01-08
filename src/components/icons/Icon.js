import getIcon from './IconsList';

function Icon(props) {
  const icon = getIcon(props.name);

  return (
    <svg
      onClick={props.onClick}
      viewBox={props.viewBox || icon.viewBox || '0 0 512 512'}
      className="icon"
      style={{ width: props.width || 'auto', height: props.height || '18px' }}
    >
      <g fill={props.color || '#000000'}>
        {icon.paths.map((path, index) => {
          return <path key={index} d={path}></path>;
        })}
      </g>
    </svg>
  );
}

export default Icon;
