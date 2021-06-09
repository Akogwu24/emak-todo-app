import { AppBar, Toolbar, Typography, SearchIcon } from '@material-ui/core';
import React from 'react';
import ButtonComp from './utils/ButtonComp';

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>Emak</Typography>
        <div>
          <SearchIcon />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
