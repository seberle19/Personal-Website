import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <IconButton aria-label="delete" variant="contained" color="secondary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <ListIcon />
    </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>About Me</MenuItem>
        <MenuItem onClick={handleClose}>Lacrosse</MenuItem>
        <MenuItem onClick={handleClose}>Books</MenuItem>
      </Menu>
    </div>
  );
}
