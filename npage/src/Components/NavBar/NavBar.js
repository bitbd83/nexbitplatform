import React from 'react';
import Menu from './Menu';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Quantaex from '../../Assets/quantaex.svg';
import Product from '.././Product/Product';
import { Link } from 'react-router-dom';
import axios from 'axios';

const styles = theme => ({
  Link: {
    textDecoration: 'none',
    cursor: 'pointer'
  },
  mobile: {
    padding: '0px',
    marginRight: '10px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block'
    }
  },
  navbar: {
    background: 'rgb(18, 17, 40)',
    [theme.breakpoints.down('sm')]: {
    color: 'rgb(18, 17, 40)'
    }
  },
  root: {
    flexGrow: 2,
  },
  grow: {
    flexGrow: 2,
    color: 'rgb(157, 165, 180)'
  },
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    marginTop: '100px',
    bottom: 20,
    zIndex: '99',
    background: '#303f4d',
    padding: '20px',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  Logo: {
    marginTop: '10px',
    marginBottom: '20px',
    background: 'transparent',
    [theme.breakpoints.down('md')]: {
      marginTop: '5px'
    }
  }
});

class ButtonAppBar extends React.Component {
  state = {
    LastPrice: []
  };
  componentDidMount() {
    axios
      .get(`https://pro.quantaex.com/api/v2/peatio/public/markets/tickers`)
      .then(res => {
        const LastPrice = res.data;
        this.setState({ LastPrice });
      });
  }
  render() {
    const { classes } = this.props;
    console.log(this.state.LastPrice);
    return (
      <div>
        <AppBar
          position="static"
          style={{
            position: 'fixed',
            paddingTop: '5px',
            paddingBottom: '5px',
            boxShadow: '4px #0ff'
          }}
          className={classes.navbar}
        >
          <Toolbar>
            <Typography variant="h4" className={classes.grow}>
              <Link
                to="/"
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <img
                  src={Quantaex}
                  height="60px"
                  width="180px"
                  alt="QuantaEx"
                  className={classes.Logo}
                />{' '}
              </Link>
              <div>
                <p
                  className={classes.mobile}
                  style={{
                    marginLeft: '260px',
                    marginTop: '-70px',
                    fontSize: '15px',
                    color: '#889fb6',
                    fontWeight: '550',
                    fontFamily: 'Exo'
                  }}
                >
                  Buy Bitcoin <br />
                  <span
                    style={{
                      fontSize: '15px',
                      fontWeight: 'bold',
                      color: '#fff'
                    }}
                  >
                    <span style= {{color:'#23cc89'}}> $ </span>
                    {this.state.LastPrice.btcusdt &&
                      this.state.LastPrice.btcusdt.ticker.buy}
                  </span>{' '}
                </p>
              </div>
              <div>
                <p
                  className={classes.mobile}
                  style={{
                    marginLeft: '420px',
                    marginTop: '-50px',
                    fontSize: '15px',
                    color: '#889fb6',
                    fontWeight: '550',
                    fontFamily: 'Exo'
                  }}
                >
                  {' '}
                  Sell Bitcoin <br />
                  <span
                    style={{
                      fontSize: '15px',
                      color: '#fff',
                      fontWeight: 'bold'
                    }}
                  >
                    <span style= {{ color: 'red'}}> $ </span>
                    {this.state.LastPrice.btcusdt &&
                      this.state.LastPrice.btcusdt.ticker.sell}
                  </span>{' '}
                </p>
              </div>
            </Typography>
            <Link to="https://pro.quantaex.com/dsr" style={{ cursor: 'pointer', textDecoration: 'none' }}>
              <Button
                  className={classes.mobile}
                style={{
                    marginRight: '5px',
                    marginLeft: '5px',
                    color: '#fff',
                    opacity: '0.8',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    padding: '10px 5px',
                    fontFamily: 'Ubuntu',
                    backgroundColor:'transition',
                    transition:  '0.3'


                  }}

              >
                DSR
              </Button>
            </Link>
            <a
              href="https://pro.quantaex.com/signup"
              style={{ textDecoration: 'none', cursor: 'pointer',  borderradius: '45' }}
            >
              <Button
                className={classes.mobile}
                style={{
                  marginRight: '5px',
                  marginLeft: '5px',
                  color: '#fff',
                  opacity: '0.8',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  padding: '5px',
                  fontFamily: 'Ubuntu',
                  backgroundColor:'transition',
                  transition:  '0.8'


                }}
              >
                Signup
                </Button>
            </a>
            <a
              href="https://pro.quantaex.com/signin"
              style={{ textDecoration: 'none', cursor: 'pointer', borderradius: '45' }}
            >
            <Button
              className={classes.mobile}
              style={{
                marginRight: '5px',
                marginLeft: '5px',
                color: '#fff',
                opacity: '0.8',
                fontWeight: 'bold',
                fontSize: '15px',
                padding: '5px',
                fontFamily: 'Ubuntu',
                backgroundColor:'transition',
                transition:  '0.8'

                           }}
            >
            Login
            </Button>
            </a>
            <a
            href="https://pro.quantaex.com/trade/btcusdt"
            style={{  textDecoration: 'none', cursor: 'pointer', borderradius: '45' }}
            >

              <Button
                className={classes.mobile}
                variant="contained"
                style={{
                  marginRight: '5px',
                  marginLeft: '5px',
                  color: '#fff',
                  opacity: '0.8',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  padding: '5px',
                  fontFamily: 'Ubuntu',
                  backgroundColor:'rgb(212, 54, 18)',
                  transition:  '0.8'
                }}
              >
                QuantaEx Pro
              </Button>
            </a>
            <Menu />
          </Toolbar>
        </AppBar>
        <div className={classes.stickToBottom}>
          <Button
            variant="contained"
            style={{
              margin: 'auto',
              backgroundColor:'#D43612',
              fontWeight: 'bold',
              color: '#D43612',
              display: 'block',
              fontFamily: 'Exo'
            }}
          >
            Web Trader
          </Button>
        </div>
      </div>
    );
  }
}
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
