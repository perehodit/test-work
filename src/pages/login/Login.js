import { useState } from 'react';
import sha256 from 'crypto-js/sha256';
import './Login.scss';
import { useHistory, Link } from 'react-router-dom';
import { paths } from '../../app/routes';
import useFormValidate from '../../hooks/useFormValidate';
import useCheckAuth from '../../hooks/useCheckAuth';
import Error from '../../components/error/Error';

function Login() {
  const history = useHistory();
  const isAuthenticated = useCheckAuth;

  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const [validateError, validate] = useFormValidate(user);

  if (isAuthenticated()) {
    return (
      <Error title="You are already logged in">
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
              &#160;|&#160;
            </span>
          ) : (
            ''
          )}
          <Link to="/dashboard">Go to dashboard</Link>
        </span>
      </Error>
    );
  } else {
    function generateToken(user) {
      const token = sha256(`${user.username}${user.password}`).toString();
      window.localStorage.setItem('token', token);
    }

    function handleSubmit(event) {
      event.preventDefault();

      if (validate()) {
        generateToken(user);
        history.push(paths.dashboard.main, {});
      }
    }

    return (
      <div className="loginPage">
        <form action="">
          <div className="formHeader">
            <h1>Authorization</h1>
          </div>
          <div className="formItem">
            <input
              value={user.username.value}
              onChange={event => {
                setUser(user => ({ ...user, username: event.target.value }));
              }}
              type="text"
              placeholder="Login"
            />
          </div>
          <div className="formItem">
            <input
              value={user.password.value}
              onChange={event => {
                setUser(user => ({ ...user, password: event.target.value }));
              }}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="fromInfo">
            {validateError ? (
              <div className="fromError">Please input all fields!</div>
            ) : (
              ''
            )}
          </div>
          <div className="formFooter">
            <button onClick={event => handleSubmit(event)}>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
