import React, { useState } from 'react';
import { css } from "@emotion/react";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// import './Login.css';
import { userToken } from '@/types/userToken';


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
    <div css={loginWrapper}>
      <h1>Rovin Pov Log in</h1>
      <Box
        css={form}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField 
          id="outlined-basic"
          label="UserID"
          variant="outlined"
          onChange={e => setUserName(e.target.value)}
        />
        <TextField 
          id="outlined-basic"
          label="Password"
          variant="outlined"
          onChange={e => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Box>
    </div>
  )
}

const loginWrapper = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const form = css({
  width: "400px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});
