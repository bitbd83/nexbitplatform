import React from 'react';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  RegisterBtn: {
    fontFamily: 'Exo',
    background: 'rgb(212, 54, 18)',
    margin: '5px',
    color: 'white',
    fontWeight: 'bold',

    [theme.breakpoints.only('xs')]: {
      display: 'block',
      margin: '8px auto'
    },
    '&:hover': {
      color: 'white',
      backgroundColor: 'rgb(18, 17, 40)'
    }
  },
  MainHeading: {
    fontWeight: 'bold',
    fonSsize: '45px',
    marginTop: '250px',
    fontFamily: 'Exo',

    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
      marginTop: '200px',
      textAlign: 'center'
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '20px',
      marginTop: '250px',
      textAlign: 'center'
    }
  },
  MainPara: {
    marginTop: '25px',
    fontFamily: 'Exo',

    [theme.breakpoints.down('md')]: {
      fontSize: '15px',
      textAlign: 'center'
    }
  },
  OpenAccountLink: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));
export default function Header() {
  const classes = useStyles();
  return (
    <Grid container style={{ marginBottom: '50px'}}>
      <Grid item lg={12} className="bg-overlay">
        <Grid container direction="column" justify="center" alignItems="center">
          <h1 className={classes.MainHeading} style={{ marginTop: '150px',color:'rgb(255, 95, 34)'}}>
            QuantaEx | High Scale Digital Asset Exchange
          </h1>
            <div className="sub-title">
          <p>
            A crypto currency exchange for beginners to professionals.
            Time-proven financial stability.
            You can also trade on mobile phones and tablets.
            Self developer, designer & security expert operated digital asset exchange.
            We can say proudly we are ONE among very few like ours.
            QuantaEx welcomes to all individual and institutional traders and investors.
          </p>
          </div>
        </Grid>

        <Grid container direction="row" justify="center" alignItems="center">

            {' '}
            <a
              href="https://pro.quantaex.com/trading/btcusdt"
              className={classes.OpenAccountLink}
            >
              <Button
                variant="contained"
                size="large"
                className={classes.RegisterBtn}
              >
                {' '}
                Open a live account{' '}
              </Button>
            </a>
            <a
              href=" https://pro.quantaex.com/trading/btcusdt"
              style={{ textDecoration: 'none' }}
            >
              <Button
                variant="outlined"
                size="large"
                color="primary"
                style={{
                  fontWeight: 'bold',
                  fontFamily: 'Exo',
                  paddingLeft: '60px',
                  paddingRight: '60px'
                }}
              >
                Register a Account
              </Button>
            </a>

        </Grid>
      </Grid>
    </Grid>
  );
}
