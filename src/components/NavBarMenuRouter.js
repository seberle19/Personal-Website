import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom'


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
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ textDecoration: 'none', display: 'block', color: '#9e9e9e' }}>
        Explore
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link
          to="/Personal-Website"
          style={{ textDecoration: 'none', display: 'block', color: '#212121' }}>
          <MenuItem onClick={handleClose}>
            Home
          </MenuItem>
        </Link>
        <Link
          to="/Profile"
          style={{ textDecoration: 'none', display: 'block', color: '#212121' }}>
          <MenuItem onClick={handleClose}>
            About Me
          </MenuItem>
        </Link>
        <Link
          to="/Books"
          style={{ textDecoration: 'none', display: 'block', color: '#212121' }}>
          <MenuItem onClick={handleClose}>
            Books
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
