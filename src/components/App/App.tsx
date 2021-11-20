import React from 'react';
import { css } from "@emotion/react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Dashboard } from '@/components/Dashboard/Dashboard';
import { Login } from '@/components/Login/Login';
import { useToken } from './useToken';

export const App = () => {
  const { token, setToken } = useToken();
  return (
    <div css={wrapper}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {!token ? <Redirect to="/login" /> : <Redirect to="/dashboard" />}
          </Route>
          <Route path="/login">
            {!token ? <Login setToken={setToken} /> : <Redirect to="/dashboard" />}
          </Route>
          <Route path="/dashboard">
            {!token ? <Redirect to="/login" /> : <Dashboard />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
const wrapper = css({
  height: "100%",
  padding: "20px",
});
