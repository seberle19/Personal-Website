import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    color: '#d32f2f',
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
  color: {
    textPrimary: '#212121',
  }
});

export default function LacrosseCard() {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Lacrosse
        </Typography>
        <Typography variant="h6" component="h3" color="textPrimary">
          Most of my free time at Swarthmore I spend playing lacrosse. I had
          a career high in points during the 2020 season, although the season
          was cut short due to COVID-19. I have also been named to the
          Centennial Confrence Academic Honor Roll in 2019 and 2020. Here is one
          of my favorite highlights from the 2020 spring season:
        </Typography>
      <CardMedia>
          <iframe
            src="https://streamable.com/e/xejnx8"
            frameborder="0"
            width="1350"
            height="600"
            margin-left="auto"
            margin-right="auto"
            >
            </iframe>
      </CardMedia>
      </CardContent>
    </Card>
  );
}
