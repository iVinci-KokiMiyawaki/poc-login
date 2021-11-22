import React, { useState } from 'react';
import { css } from "@emotion/react";
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { userToken } from '@/types/userToken';

type Props = {
  saveToken: (userToken: userToken) => void,
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

export const Login: React.FC<Props> = ({ saveToken }) => {
  const [username, setUserName] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password
    });
    if (response.status === 'success') {
      await saveToken(response);
      navigate('/');
    }
  }
  console.log('Login');
  return(
    <div css={loginWrapper}>
      <h1>Rovin Poc</h1>
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
        <Button variant="contained" onClick={handleSubmit}>Login</Button>
      </Box>
    </div>
  )
}

const loginWrapper = css({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateY(-50%) translateX(-50%)",
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
