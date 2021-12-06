import React, { useEffect } from 'react';
import { css } from "@emotion/react";
import { Auth } from 'aws-amplify';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

export const Header = () => {
  const [currentUserName, setCurrentUserName] = React.useState("");
  useEffect(() => {
    const init = async() => {
      const currentUser = await Auth.currentAuthenticatedUser();
      setCurrentUserName(currentUser.username);
    }
    init()
}, []);
  const handleSubmit = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
    document.location.reload();
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Rovin Poc
          </Typography>
          <Avatar css={avater}>
            {currentUserName}
          </Avatar>
          <Button
            color="inherit"
            onClick={handleSubmit}
          > 
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const avater = css({
  margin: "0 10px",
});
