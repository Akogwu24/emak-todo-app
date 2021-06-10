import { Container } from '@material-ui/core';
import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core';
import TodoList from '../components/TodoList';

const useStyles = makeStyles({
  container: {},
});

const Home = () => {
  const classes = useStyles();
  return (
    <Container>
      <Header />
      <TodoList />
    </Container>
  );
};

export default Home;
