import React, { useState } from 'react';
import './Login.css';
import { userToken } from '../../types/userToken';

type Props = {
  setToken: (userToken: userToken) => void,
}

async function loginUser(credentials: { username: string | undefined; password: string | undefined; }) {
  return fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export const Login: React.FC<Props> = ({ setToken }) => {
  const [username, setUserName] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper">
      <h1>Rovin Pov Log in</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>UserID</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}
