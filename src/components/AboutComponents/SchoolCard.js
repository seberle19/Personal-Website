import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

export default function SimpleCard() {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Education
        </Typography>
        <Typography variant="h6" component="h3">
          I am currently getting a B.A. in Computer Science at
          Swarthmore college. Computer science has become my favority subject,
          but the liberal arts education is what really drew to me Swarthmore.
          I have taken some really awesome courses outside of my major on
          subjects in ancient history and cognitive science.
        </Typography>
      <CardMedia
        className={classes.media}
        image={require("./photos/Swarthmore.jpg")}
        title="Contemplative Reptile"
      />
      </CardContent>
    </Card>
  );
}
