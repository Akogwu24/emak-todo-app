import { Container } from '@material-ui/core';
import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    background: 'red',
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Header />
    </Container>
  );
};

export default Home;
