import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import { useToken } from './useToken';
import './App.css';

const App = () => {
  const { token, setToken } = useToken();
  if(!token) return <Login setToken={setToken} />
  return (
    <div className="wrapper">
      <h1>Rovin Poc</h1>
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

export default App;