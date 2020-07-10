import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SchoolCard from './AboutComponents/SchoolCard.js'
import LaxCard from './AboutComponents/LacrosseCard.js'



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


export default function AboutGrid(){
  const classes = useStyles();
  return (
    <div>
      <SchoolCard/>
      <LaxCard/>
    </div>
  )


}
