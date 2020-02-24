import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import NavbarLeftMenu from './NavbarLeftMenu';
import NavbarRightMenu from './NavbarRightMenu';

const styles = {
  flex: {
    flexGrow: 1
  },
  logo: {
    color: '#fff',
    textDecoration: 'none'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  root: {
    flexGrow: 1
  },
  navinfo:
  {
    color: '#fff',
    textDecoration: 'none',
    padding:5
  }
};

class Navbar extends Component {
  render() {
    const { classes, logoutUser, user } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <NavbarLeftMenu user={user} />
            </IconButton>
            <Typography
              className={classes.flex}
              variant="title"
              color="inherit"
            >
              <Link className={classes.logo} to="/">
                Connect.ly
              </Link>
            </Typography>
            <div>
            <Link className="rutu" to={`/profile/${user.userId}`}>
                Profile
              </Link>
              </div>
              <div>
            <Link className="rutu" to="/bookview">
                Book Exchange
              </Link>
              </div>
              <div>
            <Link className="rutu" to="/discover">
                Discover
              </Link>
              </div>
            
              <div>
            <Link className="rutu" to="/internship">
                Intership
            </Link></div>
              
            
            <div>
              <NavbarRightMenu logoutUser={logoutUser} user={user} />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);