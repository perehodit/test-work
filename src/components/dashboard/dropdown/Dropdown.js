import './Dropdown.scss';
import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCurrentUser } from '../../../app/actions/currentUser';
import Icon from '../../icons/Icon';
import { paths } from '../../../app/routes';

const Dropdown = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="dropdown" ref={ref}>
      {props.users.length ? (
        props.users.map(user => {
          return (
            <div
              onClick={() => {
                if (user.id === props.currentUserId) {
                  dispatch(setCurrentUser(null));
                } else {
                  dispatch(setCurrentUser(user.id));
                  if (
                    history.location.pathname.includes(paths.dashboard.card)
                  ) {
                    history.push(paths.dashboard.main);
                  }
                }
              }}
              key={user.id}
              className={`dropdownItem ${
                user.id === props.currentUserId ? 'dropdownItemActive' : ''
              }`}
            >
              {`${user.name} ${user.surname}`}
            </div>
          );
        })
      ) : (
        <span className="dropdownNoData">
          <Icon name="empty"></Icon>
          <span>No data</span>
        </span>
      )}
    </div>
  );
});

export default Dropdown;
