import { Link } from 'react-router-dom';
import Error from '../../components/error/Error';
import { useHistory } from 'react-router-dom';
import useCheckAuth from '../../hooks/useCheckAuth';

function NotFound() {
  const history = useHistory();
  const isAuthenticated = useCheckAuth;

  return (
    <Error title="Page Not Found">
      <span>
        {history.length > 2 ? (
          <span>
            <Link
              onClick={event => {
                event.preventDefault();
                history.goBack();
              }}
            >
              Go back
            </Link>

            {isAuthenticated() ? (
              <span>
                &#160;|&#160;
                <Link to="/dashboard">Go to dashboard</Link>
              </span>
            ) : (
              ''
            )}
          </span>
        ) : isAuthenticated() ? (
          <Link to="/dashboard">Go to dashboard</Link>
        ) : (
          <Link to="/dashboard">Sing in</Link>
        )}
      </span>
    </Error>
  );
}

export default NotFound;
