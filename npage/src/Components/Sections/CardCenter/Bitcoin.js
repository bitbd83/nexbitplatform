import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import BitcoinChart from './BitcoinChart';

const styles = theme => ({});

function Bitcoin(props) {
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <div style={{ marginTop: '20px' }}>
          <i
            className="fab fa-bitcoin fa-2x bitcoin "
            style={{ color: '#ff8e00', marginTop: '20px' }}
          />

          <p
            style={{
              marginLeft: '40px',
              marginTop: '-40px',
              fontFamily: 'Exo'
            }}
          >
            {' '}
            Bitcoin{' '}
          </p>

          <p
            style={{
              marginLeft: '40px',
              marginTop: '-15px',
              fontFamily: 'Exo'
            }}
          >
            $9975.75
          </p>
        </div>

        <div>
          <p
            style={{
              marginLeft: '20px',
              marginTop: '33px',
              fontFamily: 'Exo',
              color: 'lightgrey'
            }}
          >
            {' '}
            24h change{' '}
          </p>

          <p
            style={{
              marginLeft: '25px',
              marginTop: '-15px',
              fontFamily: 'Exo',
              color: 'red'
            }}
          >
            -1.67%
          </p>
        </div>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <BitcoinChart />
      </Grid>
    </React.Fragment>
  );
}
export default withStyles(styles)(Bitcoin);
