import './Error.scss';

function Error(props) {
  return (
    <div className="error">
      <h1>{props.title}</h1>
      <div className="errorBody">{props.children}</div>
    </div>
  );
}

export default Error;
