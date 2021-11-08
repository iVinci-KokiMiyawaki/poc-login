import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dashboard } from '../Dashboard/Dashboard';
import { Login } from '../Login/Login';
import { useToken } from './useToken';
import './App.css';

export const App = () => {
  const { token, setToken } = useToken();
  if(!token) return <Login setToken={setToken} />
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
