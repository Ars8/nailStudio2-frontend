import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import { fetchUserData } from './store/ducks/user/actionCreators';
import { selectIsAuth, selectUserStatus } from './store/ducks/user/selectors';
import { LoadingStatus } from './store/types';
import ActivatePage from "./pages/ActivatePage";
import './App.css';
import Login from './pages/Login';
import Event from './pages/Event';

const App:FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const loadingStatus = useSelector(selectUserStatus);
  const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;

  React.useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  React.useEffect(() => {
    if (!isAuth && isReady) {
      history.push('/event');
    } else if (history.location.pathname === '/signin') {
      history.push('/signin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, isReady]);

  if (!isReady) {
    return (
      <div>
        Loading...
      </div>
    );
  }

    return (
      <Switch>
        <Route path="/signin" component={Login} exact />
        <Layout>
            <Navbar/>
            <Layout.Content>
              <Route path="/event" component={Event} />
              <Route path="/user/activate/:hash" component={ActivatePage} exact />
            </Layout.Content>
        </Layout>
      </Switch>
        
    );
};

export default App;
