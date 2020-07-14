import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import BookList from './BooksComponents/BookList.js'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { flexbox } from '@material-ui/system';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#eeeeee',
    textPrimary: '#212121',
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 500,
    paddingTop: 0, // 16:9
  },
});


export default function BooksCard() {
  const classes = useStyles();

  return(
    <div>
      <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                 >
        <Paper elevation={0} className={classes.root}>
            <Box width="100%">
              <Typography variant="h6">
                I believe that the information that we consume is one of the strongest
                factors that determines the way we think, and therefore, who we are.
                Because of this, I try to read things that I think will expand my
                ability to think. I have always loved to read, and so I thought
                I would share some of the most interesting books that I have read
                recently. To quote Anthony Fantano "Y'all know this is just my
                opinion, right?"
              </Typography>
            </Box>
        </Paper>
      </Grid>
      <BookList/>
    </div>
  );







}
