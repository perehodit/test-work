import { Redirect, Switch, Route } from 'react-router-dom';

// layouts
import DashboardLayout from '../layouts/DashboardLayout';

// pages
import Login from '../pages/login/Login';
import Main from '../pages/main/Main';
import Users from '../pages/users/Users';
import CardPage from '../pages/card/CardPage';
import NotFound from '../pages/404/NotFound';

export const paths = {
  root: '/',
  system: {
    login: '/login',
    notFound: '/404',
  },
  dashboard: {
    main: '/dashboard',
    users: '/dashboard/users',
    card: '/dashboard/card',
  },
};

const dashboardRoutes = [
  {
    name: 'Users',
    path: paths.dashboard.users,
    component: <Users></Users>,
  },
  {
    name: 'Card',
    path: `${paths.dashboard.card}/:id`,
    component: <CardPage></CardPage>,
  },
  {
    name: 'Main',
    exact: true,
    path: paths.dashboard.main,
    component: <Main></Main>,
  },
  {
    name: 'Main',
    path: paths.dashboard.main,
    component: <Redirect to={paths.system.notFound} />,
  },
];

export const routes = [
  {
    name: 'Login',
    path: paths.system.login,
    component: <Login></Login>,
  },
  {
    name: 'Dashboard',
    path: paths.dashboard.main,
    private: true,
    component: (
      <Switch>
        {dashboardRoutes.map((route, index) => {
          return (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              render={() => (
                <DashboardLayout>{route.component}</DashboardLayout>
              )}
            />
          );
        })}
      </Switch>
    ),
  },
  {
    name: 'Dashboard',
    path: '/',
    component: <Redirect to={paths.dashboard.main} />,
    exact: true,
  },
  {
    name: 'NotFound',
    path: paths.system.notFound,
    component: <NotFound></NotFound>,
  },
  {
    name: 'NotFound',
    path: paths.root,
    component: <Redirect to={paths.system.notFound} />,
  },
];
