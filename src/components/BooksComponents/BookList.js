import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Moonwalking from './photos/MoonwalkingWithEinstein.jpeg'
import Quants from './photos/TheQuants.jpg'
import Myth from './photos/Mythology.jpg'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#9e9e9e'
  },
  media: {
    height: 600,
    width: 400,
  },
});

const bookInformation = [
  {
    "bookTitle": "Moonwalking with Einstein",
    "bookAuthor": "Joshua Foer",
    "bookDescription": "This was one of the most enthralling and informational books that I have read in a very long time. Joshua Foer showcases some amazing evidence for the power of the human memory, and also provides some insight into how any ordinary person could train their brain to have a seemingly infitinte amount of memory storage. I think this book was so enjoyable because it made me think about something that is essential to who I am but it is not something that I ever think about.",
    "rating": 9,
    "picture": Moonwalking
  },
  {
    "bookTitle": "The Quants",
    "bookAuthor": "Scott Patterson",
    "bookDescription": "This work provides a glimpse into the world of Quatitative investment strategies. It tells the story of how a bunch of math geniuses were able to use their theoretical math solutions to solve the problems in the stock market (and make billions along the way). The book does, however, somewhat serve as a cautionary tale. One of Patterson's main points is that the stock market is not something that can predicted in the real world. Humans are too unpredictable, and they make the stock market so unpredictable that even the most sophisticated and successful math-based approaches are almost destined to fail.",
    "rating": 7.5,
    "picture": Quants
  },
  {
    "bookTitle": "Mythology",
    "bookAuthor": "Edith Hamilton",
    "bookDescription": "When my dad recommended that I read this book because it was of the most famous textbooks ever written, I was not completely sold that it was worth my time. As I began reading the book, however, I realized why this is such a great book to read. I have always felt that I wanted to know more about Greek Mythology but I never wanted to be burdened with having to struggle through a tough story like the Illiad. This book is perfect for anyone who would like to know about Mythology, but is okay with getting a cliff-notes version. Hamilton tells you all of the important parts of the stories without any of the clunky rhyming or extraneous details, that might be off putting. Hamilton also often creates a synthesis of one story from multiple different accounts to paint a more complete picture of the mythological tales. If you want to learn, but you don't really care for Homer's long-windedness, this is a great book.",
    "rating": 8,
    "picture": Myth
  },
]




export default function BookList() {
  const classes = useStyles();

  return (
    <div>
      {bookInformation.map((book_detail, index)=>{
        return   <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                   >
      <Card className={classes.root}>
      <div>
        <Grid item
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
         >
          <CardMedia
            align="center"
            className={classes.media}
            image={book_detail.picture}
            title={book_detail.bookTitle}
            alt="Image"
          />
        </Grid>
      </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {book_detail.bookTitle}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {book_detail.bookAuthor}

          </Typography>
          <Typography variant="body1" component="p">
            <br/>
            {book_detail.bookDescription}
          </Typography>
          <Typography variant="subtitle">
            <br/>
            Personal Rating: {book_detail.rating}/10
          </Typography>
        </CardContent>

    </Card>
    </Grid>
      })}
    </div>
  )
}
