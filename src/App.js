import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes, paths } from './app/routes';
import useCheckAuth from './hooks/useCheckAuth';

function App() {
  const isAuthenticated = useCheckAuth;

  function handleRoute(route) {
    if (route.private) {
      if (isAuthenticated()) {
        return route.component;
      } else {
        return <Redirect to={paths.system.login} />;
      }
    } else {
      return route.component;
    }
  }

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              render={() => handleRoute(route)}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
