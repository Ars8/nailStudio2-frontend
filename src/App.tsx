import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import NavBar from "./components/NavBar";
import {Layout} from "antd";
import { fetchUserData } from './store/ducks/user/actionCreators';
import { selectIsAuth, selectUserStatus } from './store/ducks/user/selectors';
import { LoadingStatus } from './store/types';
import ActivatePage from "./pages/ActivatePage";
import './App.css';
import Login from './pages/Login';
import Event from './pages/Event';
import NailsMasters from './components/NailsMasters';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import OurTeam from './pages/OurTeam';

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
      history.push('/home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth, isReady]);

    return (
      <Switch> 
        <>
          <Layout>        
              <NavBar/>              
              <Layout.Content>
                <Route path="/signin" component={Login} exact />
                <Route path="/home" component={Home} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/ourteam" component={OurTeam} />
                <Route path="/portfolio" component={Portfolio} />                
                <Route path="/masters/appointment/:id" component={Event} />
                <Route path="/nailsmasters" component={NailsMasters} />
                <Route path="/user/activate/:hash" component={ActivatePage} exact />
              </Layout.Content>
              <Footer/>
          </Layout>
        </>        
      </Switch>
        
    );
};

export default App;
