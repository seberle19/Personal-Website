import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NavBarMenuRouter from './NavBarMenuRouter.js'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "none",
    backgroundColor: "#bdbdbd",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();


  return (
    <div>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar>
          <NavBarMenuRouter/>
          <Typography variant="h6" className={classes.title}>
            Scott Eberle
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
