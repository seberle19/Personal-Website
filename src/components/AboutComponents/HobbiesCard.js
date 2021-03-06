import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import NewsPaper from './photos/NewsPaper.png';
import PlanePull from './photos/PlanePull.jpeg';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#c62828'
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

export default function HobbiesCard() {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Hobbies
        </Typography>
        <Typography variant="h6" component="h3">
          Outside of lacrosse, I also write a bi-weekly sports column for the
          Swarthmore College Newspaper the <i> Phoenix.</i> Personally, I do not
          believe that analysis of games or debates on who is the best football
          team are all that interesting to the general public, so I instead try
          to focus my writing on broad issues that are present in the world, but
          are interesting when viewed through a sports lens. If you would like
          to read some of my writing you can click on the newspaper to be taken
          to some of my articles. <br/>
          <RouterLink
            to={{ pathname: "https://swarthmorephoenix.com/author/scott-eberle/" }}
            target="_blank"
            >
            <img
              algin="center"
              alt="NewsPaper"
              src={NewsPaper}
              height= "200"
              />
          </RouterLink>
        </Typography>
        <Typography variant="h6" component="h3">
          Volunteering in my community is something that is important to me.
          As a group, my lacrosse team recently volunteered to provide a meal
          at the CityTeam location in Chester, which is just down the road from
          Swarthmore.
          <br/>
          <br/>
          Last spring, some members of the lacrosse team and some of our other
          friends participated in the Ronald McDonald Plane pull. It is a
          fundraiser for the Ronald McDonald House near the Children's Hospital
          of Philadelphia, where teams of 20 must raise a certain amount of
          money to participate. Then the teams have a competition to see who
          can pull a plane about 100 feet the quickest at the Philadelphia
          Airport. Our group ended up having the fastest time and winning the
          trophy (pictured below along with my friend Chris). This
          was the most enjoyable and unique fundraiser that I have ever
          experienced. Althought we were not able to participate in the Plane
          Pull in 2020 due to COVID, we are hoping to defend our title soon. 
        </Typography>
        <CardMedia
          component="img"
          src={PlanePull}
          alt="Plane Pull Trophy"
          height = "1000"
          align="center"
        />
      </CardContent>
    </Card>
  );
}
