import React from 'react';
import { List } from '../List/List';

async function fetchList(credentials: { username: string | undefined; password: string | undefined; }) {
  return fetch('http://localhost:8080/fetch', {
    method: 'GET',
  })
  .then(data => data.json())
}

export const Dashboard = () => {
  return(
    <>
      <h1>Rovin Poc</h1>
      <List />
    </>
  );
}
