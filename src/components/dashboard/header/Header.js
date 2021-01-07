import { useRef, useState } from 'react';
import './Header.scss';
import Icon from '../../icons/Icon';
import Dropdown from '../dropdown/Dropdown';
import useClickOutside from '../../../hooks/useClickOutside';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const users = useSelector(store => store.users).sort((a, b) => {
    return b.id - a.id;
  });
  const currentUserId = useSelector(store => store.currentUser);
  const currentUser = users.find(user => {
    if (user.id === currentUserId) {
      return user;
    }
    return false;
  });

  const history = useHistory();
  const ref = useRef();
  const [toggle, setToggle] = useState(false);

  useClickOutside(ref, () => setToggle(false));

  return (
    <div className="header">
      <div className="container">
        <span className="headerInlineContainer">
          <span className="headerCurrentUser">
            {currentUser
              ? `${currentUser.name} ${currentUser.surname}`
              : 'User not selected'}
          </span>
          <span className="headerControls">
            <span
              onClick={() => {
                setToggle(true);
              }}
              className={`textWithIcon headerItem ${
                toggle ? 'textWithIconActive' : ''
              }`}
            >
              <Icon name="user"></Icon>
              <span>Users</span>
              {toggle ? (
                <Dropdown
                  currentUserId={currentUserId}
                  users={users}
                  ref={ref}
                ></Dropdown>
              ) : (
                ''
              )}
            </span>
            <span
              onClick={() => {
                window.localStorage.removeItem('token');
                history.push('/login');
              }}
              className="textWithIcon headerItem"
            >
              <Icon name="logout"></Icon>
              <span>Logout</span>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Header;
