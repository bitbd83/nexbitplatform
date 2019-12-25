import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import InvestChart from './InvestChart';

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
          <p
            style={{ marginLeft: '0px', marginTop: '10px', fontFamily: 'Exo' }}
          >
            {' '}
            GOLDL{' '}
          </p>

          <p
            style={{ marginLeft: '0px', marginTop: '-15px', fontFamily: 'Exo' }}
          >
            $1507.59
          </p>
        </div>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <InvestChart />
      </Grid>
    </React.Fragment>
  );
}
export default withStyles(styles)(Bitcoin);
