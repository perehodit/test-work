import './Menu.scss';
import { NavLink, useHistory } from 'react-router-dom';
import { paths } from '../../../app/routes';

function Menu() {
  const history = useHistory();

  return (
    <div className="menu">
      <div className="container">
        <NavLink
          to={paths.dashboard.main}
          activeClassName="menuActive"
          className={`menuItem ${
            history.location.pathname.includes(paths.dashboard.card)
              ? 'menuActive'
              : ''
          }`}
          exact
        >
          Cards
        </NavLink>
        <NavLink
          to={paths.dashboard.users}
          activeClassName="menuActive"
          className="menuItem"
        >
          Users
        </NavLink>
      </div>
    </div>
  );
}

export default Menu;
