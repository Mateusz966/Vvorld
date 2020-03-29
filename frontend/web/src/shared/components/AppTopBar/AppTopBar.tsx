import React from 'react';
import { Menu, AccountCircle, PowerSettingsNew } from '@material-ui/icons';
import { Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import styled from 'styled-components';


const UserActionSection = styled('div')`
  margin: 0 0 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  button {
    min-width: 35px;
    padding: 5px;
    &:last-of-type {
      margin-left: 15px;
    }
  }
`;

const AppTopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Typography variant="h6">
          Vegan Vorld
         </Typography>
        <UserActionSection>
          <Button color="inherit">
            <AccountCircle />
          </Button>
          <Button color="inherit">
            <PowerSettingsNew />
          </Button>
        </UserActionSection>
      </Toolbar>
    </AppBar>
  );
};

export default AppTopBar;
