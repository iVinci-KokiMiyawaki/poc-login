import React from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useToken } from '@/constants/useToken';

async function logoutUser(credentials: { token: string | undefined; }) {
  return fetch('/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}

export const Header: React.FC = () => {
  const { token, removeToken } = useToken();
  const navigate = useNavigate();
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const response = await logoutUser({ token });
    if (response.status === 'success') {
      await removeToken();
      navigate('/login');
    }
  }
  console.log('Header');
  console.log(token);
  const isLogin = !!token;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rovin Poc
          </Typography>
          <Button
            color="inherit"
            onClick={handleSubmit}
            disabled={!isLogin}
          > 
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;

