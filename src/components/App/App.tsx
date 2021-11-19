import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Dashboard } from '../Dashboard/Dashboard';
import { Login } from '../Login/Login';
import { useToken } from './useToken';
import './App.css';

export const App = () => {
  const { token, setToken } = useToken();
  return (
    <div className="wrapper">
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
