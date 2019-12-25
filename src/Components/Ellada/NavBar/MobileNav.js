import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Logo from '../../../Assets/img/logo-white.png';

const styles = theme => ({
  paper: {
    background: '#222644',
    marginTop: '25px'
  },
  grow: {
    flexGrow: 1
  },

  menuButton: {
    marginRight: '5px'
  },
  Btn: {
    color: '#6c7e9e'
  },
  Btn2: {
    color: '#6c7e9e',
    fontFamily: 'Rajdhani',
    textTransform: 'capitalize',
    fontSize: '16px',
    margin: '0px auto',
    display: 'block',
    fontWeight: 'bold'
  },
  Btn3: {
    color: '#6c7e9e',
    fontFamily: 'Rajdhani',
    textTransform: 'capitalize',
    fontSize: '16px',
    margin: '0px auto',
    display: 'block',
    fontWeight: 'bold'
  },
  Btn4: {
    color: '#6c7e9e',
    fontFamily: 'Rajdhani',
    textTransform: 'capitalize',
    fontSize: '16px',
    margin: '0px auto',
    display: 'block',
    fontWeight: 'bold'
  },
  Btn5: {
    color: '#25dbc3',
    fontFamily: 'Rajdhani',
    textTransform: 'capitalize',
    fontSize: '16px',
    margin: '0px auto',
    display: 'block',
    fontWeight: 'bold'
  },
  Btn6: {
    color: '#ffffff',
    textTransform: 'capitalize',
    margin: '0px auto',
    display: 'block',
    fontWeight: 'bold'
  },
  Btn8: {
    color: '#6c7e9e4',
    background: '#26dcc3',
    fontFamily: 'Rajdhani',
    fontSize: '16px',
    margin: '0px auto',
    display: 'block',
    fontWeight: 'bold'
  },
  Btn9: {
    color: '#eeeff1',
    textTransform: 'capitalize',
    border: '1px solid #eeeff1',
    marginLeft: '10px',
    fontWeight: 'bold'
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  Link: {
    textDecoration: 'none',
    color: '#6c7e9e',
    cursor: 'pointer'
  },
  logo: {
    width: '170px',
    height: '25px',
    marginLeft: '2px',
    marginTop: '5px'
  }
});

class MobileNav extends React.Component {
  state = {
    openWithdraw: false,
    openDeposit: false,
    mobileMoreAnchorEl: false,
    anchorEl: {}
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: false });
  };

  handleMobileMenuOpen = e => {
    this.setState({ mobileMoreAnchorEl: true, anchorEl: e.currentTarget });
  };

  openWithdraw = () => {
    this.setState({ openWithdraw: true });
  };
  closeWithdraw = () => {
    this.setState({ openWithdraw: false });
  };

  openDeposit = () => {
    this.setState({ openDeposit: true });
  };

  closeDeposit = () => {
    this.setState({ openDeposit: false });
  };
  render() {
    const { classes } = this.props;

    const mobileMenuId = 'primary-search-account-menu-mobile';

    const renderMobileMenu = (
      <div>
        <Menu
          classes={{
            paper: classes.paper
          }}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={this.state.mobileMoreAnchorEl}
          onClose={this.handleMobileMenuClose}
        >
          <a href="#section2">
            <MenuItem
              onClick={this.handleMobileMenuClose}
              style={{
                borderBottom: '1px solid #6c7e9e'
              }}
            >
              <Button className={classes.Btn4}>Home</Button>
            </MenuItem>
          </a>

          <MenuItem
            style={{ borderBottom: '1px solid #6c7e9e' }}
            onClick={this.handleMobileMenuClose}
          >
            <Button className={classes.Btn2} onClick={this.openDeposit}>
              Token
            </Button>
          </MenuItem>

          <MenuItem
            style={{ borderBottom: '1px solid #6c7e9e' }}
            onClick={this.handleMobileMenuClose}
          >
            <Button className={classes.Btn3} onClick={this.openWithdraw}>
              Whitepaper
            </Button>
          </MenuItem>

          <MenuItem
            style={{ borderBottom: '1px solid #6c7e9e' }}
            onClick={this.handleMobileMenuClose}
          >
            <Button className={classes.Btn5}> Roadmap </Button>
          </MenuItem>

          <MenuItem
            style={{ borderBottom: '1px solid #6c7e9e' }}
            onClick={this.handleMobileMenuClose}
          >
            <Button className={classes.Btn6}>Platform</Button>
          </MenuItem>

          <MenuItem style={{ borderBottom: '1px solid #6c7e9e' }}>
            <Button
              variant="contained"
              className={classes.Btn8}
              onClick={this.handleMobileMenuClose}
            >
              Team
            </Button>
          </MenuItem>

          <MenuItem onClick={this.handleMobileMenuClose}>
            <Button className={classes.Btn9}>News </Button>
          </MenuItem>
        </Menu>
      </div>
    );

    return (
      <div className={classes.grow}>
        <AppBar position="static" style={{ background: '#212644' }}>
          <Toolbar>
            <Link to="/" className={classes.Link}>
              {' '}
              <img
                src={Logo}
                width="150px"
                height="50px"
                alt="logo"
                className={classes.logo}
              />{' '}
            </Link>
            <div className={classes.grow} />
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    );
  }
}
export default withStyles(styles)(MobileNav);
