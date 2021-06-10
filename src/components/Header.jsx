import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Container,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';

import ButtonComp from './utils/ButtonComp';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  logo: {
    fontSize: '3rem',
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
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
  searchBar: {
    backgroundColor: '#7aafec',
    display: 'flex',
    height: '4rem',
    justifyContent: 'space-between',
  },

  myInput: {
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
    },
  },
  btnContainer: {
    marginTop: '8rem',
    '& button': {
      width: '10rem',
      marginRight: '3rem',
      fontSize: '1.8rem',
      padding: '5px 2rem',
    },
  },
  activeBtn: {
    backgroundColor: '#004374',
    color: '#fff',
  },
});

const Header = () => {
  const classes = useStyles();
  const [currView, setCurrView] = useState('all');

  return (
    <>
      <AppBar position='fixed' className={classes.navbar}>
        <Toolbar>
          <Container className={classes.headerContent}>
            <Typography className={classes.logo}>Emak</Typography>
            {/* <form className={classes.searchBar}>
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
          </form> */}
            <ButtonComp className={classes.btnStyles}>Add To Do</ButtonComp>
          </Container>
        </Toolbar>
      </AppBar>
      <div className={classes.btnContainer}>
        <Button
          onClick={() => setCurrView('all')}
          variant='contained'
          className={currView === 'all' ? classes.activeBtn : classes.btn}
        >
          All
        </Button>
        <Button
          onClick={() => setCurrView('done')}
          variant='contained'
          className={currView === 'done' ? classes.activeBtn : classes.btn}
        >
          Done
        </Button>
        <Button
          onClick={() => setCurrView('pending')}
          variant='contained'
          className={currView === 'pending' ? classes.activeBtn : classes.btn}
        >
          Pending
        </Button>
      </div>
    </>
  );
};

export default Header;
