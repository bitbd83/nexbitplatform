import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';
import Logo from '../../../Assets/ellada/logo-dark.png';

const styles = theme => ({
  root: {
    backgroundColor: 'red'
  },
  Logo: {
    width: '170px',
    height: '25px',
    marginLeft: '70px',
    marginTop: '8px'
  },

  Btn1: {
    color: '#6c7e9e',
    fontFamily: 'Rajdhani',
    textTransform: 'capitalize'
  },
  Btn2: {
    color: '#6c7e9e',
    fontFamily: 'Rajdhani',
    textTransform: 'capitalize',
    fontSize: '16px'
  },
  Btn3: {
    color: '#6c7e9e',
    fontFamily: 'Rajdhani',
    textTransform: 'capitalize',
    fontSize: '16px'
  },
  Btn4: {
    color: '#6c7e9e',
    fontFamily: 'Rajdhani',
    textTransform: 'capitalize',
    fontSize: '16px'
  },
  Btn5: {
    color: '#25dbc3',
    fontFamily: 'Rajdhani',
    textTransform: 'capitalize',
    fontSize: '16px'
  },
  Btn6: {
    color: '#ffffff',
    textTransform: 'capitalize'
  },
  Btn7: {
    color: '#6c7e9e',
    textTransform: 'capitalize'
  },
  Btn8: {
    color: '#6c7e9e4',
    background: '#26dcc3',
    fontFamily: 'Rajdhani',
    fontSize: '16px',
    fontWeight: '600'
  },
  Btn9: {
    color: '#eeeff1',
    textTransform: 'capitalize',
    border: '1px solid #eeeff1',
    marginLeft: '10px'
  },
  Link: {
    textDecoration: 'none',
    cursor: 'pointer'
  },
  LowerMenu: {
    marginTop: '20px'
  },
  login: {
    fontWeight: '700',
    textDecoration: 'none',
    outline: 'none',
    transition: '0.2s',
    borderRadius: '50px',
    border: '2px solid #0ca1f9',
    boxShadow: 'none',
    textShadow: 'none',
    zIndex: '1',
    lineHeight: '1',
    backgroundColor: '#ffffff',
    color: '#0ca1f9',
    padding: '0.525rem 2.35rem',
    fontSize: '0.875rem',
    textTransform: 'capitalize',
    fontFamily: "'Open Sans', sans-serif"
  },
  Signup: {
    borderRadius: '50px',
    backgroundColor: '#46da60',
    border: '2px solid #46da60',
    color: '#ffffff',
    fontFamily: "'Open Sans', sans-serif",
    padding: '0.3rem 2.50rem',
    textTransform: 'capitalize',
    fontWeight: '700',
    marginLeft: '5px'
  },
  MenuBtn: {
    fontFamily: "'Montserrat', sans-serif",
    color: 'black',
    opacity: '0.9',
    textTransform: 'capitalize'
  }
});

class DesktopNav extends React.Component {
  state = {
    OpenWithdraw: false,
    OpenDeposit: false
  };
  CloseDeposit = () => {
    this.setState({ OpenDeposit: false });
  };
  CloseWithdraw = () => {
    this.setState({ OpenWithdraw: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div
        style={{
          overflow: 'hidden',
          position: 'fixed',
          top: '0px',
          width: '100%',
          background: 'white',
          borderBottom: '2px solid #0071ff',
          padding: '10px',
          zIndex: '1'
        }}
      >
        <Grid container>
          <Grid item lg={4} md={4} sm={4} xs={4}>
            <Link to="/" className={classes.Link}>
              {' '}
              <img
                src={Logo}
                className={classes.Logo}
                style={{ background: 'transparent' }}
                alt="logo"
              />
            </Link>
          </Grid>
          <Grid item lg={8} md={8} sm={8} xs={8}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              alignItems="flex-start"
              style={{ marginLeft: '-10px' }}
            >
              <section>
                <a href="#section1" className={classes.Link}>
                  <Button className={classes.MenuBtn}>Home</Button>
                </a>

                <Button className={classes.MenuBtn}>Token</Button>
                <Button className={classes.MenuBtn}>Whitepaper</Button>
                <Button className={classes.MenuBtn}>Roadmap</Button>
                <Button className={classes.MenuBtn}>Platform</Button>
                <Button className={classes.MenuBtn}>Team</Button>
                <a href="#section2">
                  <Button className={classes.MenuBtn}>News</Button>{' '}
                </a>
                <Button
                  size="small"
                  variant="contained"
                  className={classes.login}
                >
                  login
                </Button>
                <Button variant="outlined" className={classes.Signup}>
                  Sign Up
                </Button>
              </section>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(DesktopNav);
