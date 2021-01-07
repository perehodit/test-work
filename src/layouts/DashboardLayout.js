import Header from '../components/dashboard/header/Header';
import Menu from '../components/dashboard/menu/Menu';
import { Provider } from 'react-redux';
import store from '../app/store';

function DashboardLayout(props) {
  return (
    <Provider store={store}>
      <div className="dashboardLayout">
        <Header></Header>
        <Menu></Menu>
        <div className="container">
          <div className="content">{props.children}</div>
        </div>
      </div>
    </Provider>
  );
}

export default DashboardLayout;
