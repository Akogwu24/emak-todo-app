import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '2rem',
  },
  heading: {
    fontSize: '2rem',
  },
  desc: {
    fontSize: '1.5rem',
  },
});

const TodoItem = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Accordion>
        <AccordionSummary>
          <Typography className={classes.heading}>
            #{'1'} {'title'}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit ame
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default TodoItem;
