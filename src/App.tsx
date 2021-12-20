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
import NailsMasters from './components/NailsMasters';

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
    if (history.location.pathname === '/') {
      history.push('/event');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, isReady]);

    return (
      <Switch> 
        <>
          <Layout>        
              <Navbar/>
              <Route path="/signin" component={Login} exact />
              <Layout.Content>
                <Route path="/event" component={Event} />
                <Route path="/nailsmasters" component={NailsMasters} />
                <Route path="/user/activate/:hash" component={ActivatePage} exact />
              </Layout.Content>
          </Layout>
        </>        
      </Switch>
        
    );
};

export default App;
