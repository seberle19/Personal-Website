import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CrabPhoto from './photos/CrabPhoto.jpeg';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    Width: 1,
    backgroundColor: '#bbdefb',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '70%',
    maxHeight: '70%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item alginContent="center">
            <img
              className={classes.img}
              src={CrabPhoto}
              algin="center"
              alt="Me with a crab"
              />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography paragraph variant="h2">
                  Hello, I am Scott and welcome to my website!
                </Typography>
                <Typography variant="body1" paragraph="true">
                  I am a Computer Science Major at Swarthmore college. I love to
                  explore new things in the programming world, and I am really
                  excited for the future of programming. The constant
                  innovation and supportive environment in the coding
                  community is what drew me to Computer Science.
                </Typography>
                <Typography variant="body2" paragraph="true">
                  Feel free to putz around if you would like to get to know me
                  better. In the meantime, here are some other links with more
                  information about me:
                </Typography>
                <Typography>
                <RouterLink
                  target="_blank"
                  to="https://www.linkedin.com/in/scott-eberle-43a754173/"
                  >
                  My LinkedIn
                </RouterLink>
                </Typography>
                <Typography>
                <RouterLink
                  target="_blank"
                  to="https://github.com/seberle19/"
                  >
                  My Personal Github
                </RouterLink>
                  <br/> Contact: skeberle19@gmail.com
                </Typography>


                <Typography variant="body2" color="textSecondary">
                  (Pictured here: my friend Devin and I enjoying some shellfish)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
