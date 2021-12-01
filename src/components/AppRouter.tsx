import React from "react";
import { useSelector } from 'react-redux';
import {Switch, Route, Redirect} from "react-router-dom";
import { selectIsAuth } from '../store/ducks/user/selectors';
import { privateRoutes, publicRoutes, RouteNames } from "../router";

const AppRouter = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    isAuth
      ?
      <Switch>
        {privateRoutes.map(route => 
          <Route 
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        )}
        <Redirect to={RouteNames.EVENT}/>
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route => 
          <Route 
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        )}
        <Redirect to={RouteNames.LOGIN}/>
      </Switch>
  );
};

export default AppRouter;