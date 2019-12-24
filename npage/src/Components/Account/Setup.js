import React from 'react';
import { Grid, Button } from '@material-ui/core';
import Flash from 'react-reveal/Flash';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  welocme: {
    textAlign: 'center',
    fontFamily: 'Exo',
    marginTop: '100px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px'
    }
  }
}));

function Setup() {
  const classes = useStyles();
  return (
    <section>
      <Grid container style={{ margin: '50px 0px' }}>
        <Grid item lg={3} sm={3} />
        <Grid item lg={6} sm={6}>
          <section className="setup-section">
            <Grid container>
              <Grid item lg={12}>
                <h2 style={{color:'#D43612'}}>
                  QuantaEx the most advacne crypto exchanges in the world
                </h2>
                <Flash>
                  <div>
                    <a
                      href="https://pro.quantaex.com/trading/btcusdt"
                      style={{ textDecoration: 'none', color: 'rgb(2, 7, 10)' }}
                    >
                      <Button
                        size="large"
                        variant="contained"
                        style={{
                          display: 'block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          marginTop: '50px',
                          background: '#D43612',
                          color: 'rgb(2, 7, 10)',
                          fontWeight: 'bold'
                        }}
                      >
                        Set up Trading Account
                      </Button>
                    </a>
                  </div>
                </Flash>
                <a
                  href="https://pro.quantaex.com/signin"
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    size="large"
                    style={{
                      display: 'block',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      marginTop: '20px',
                      color: '#D43612',
                      fontWeight: 'bold',
                      fontSize: '14px'
                    }}
                  >
                    Already a memner ?
                    <span style={{ color: '#D43612' }}> Sign in </span>
                  </Button>
                </a>
              </Grid>
            </Grid>{' '}
          </section>
        </Grid>
        <Grid item lg={3} />
      </Grid>
    </section>
  );
}
export default Setup;
