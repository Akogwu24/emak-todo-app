import {
  AppBar,
  Container,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import React from 'react';
import ButtonComp from './utils/ButtonComp';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  logo: {
    fontSize: '2rem',
  },
  navbar: {
    color: '',
    background: '#004374',
  },
  headerContent: {
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnStyles: {
    color: '#0b1863',
    fontSize: '1.8rem',
    backgroundColor: 'white',
  },
  searchBar: {
    // width: '80%',
    display: 'flex',
    height: '4rem',
    justifyContent: 'space-between',
  },

  myInput: {
    // backgroundColor: '#7aafec',
    borderRadius: '5px',
    width: '20rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    outline: 'none',
    border: 'none',
    '&::placeholder': {
      color: 'white',
      fontSize: '2rem',
      // width: '100%',
    },
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.navbar}>
      <Toolbar>
        <Container className={classes.headerContent}>
          <Typography className={classes.logo}>Emak</Typography>
          <form className={classes.searchBar}>
            <TextField
              id='outlined-basic'
              variant='filled'
              placeholder='search todos'
              InputProps={{
                classes: { input: classes.myInput },
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchOutlined style={{ fontSize: '3rem' }} />
                  </InputAdornment>
                ),
              }}
            />
          </form>
          <ButtonComp className={classes.btnStyles}>Add To Do</ButtonComp>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
