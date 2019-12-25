import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Dexfin from '../../../Assets/qx-ieo.png';

const styles = theme => ({});

function IEO(props) {
  return (
    <React.Fragment>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <div style={{ marginTop: '20px' }}>
          <img src={Dexfin} alt="card-logo" width="90px" height="25px" />

          <p
            style={{
              marginLeft: '4px',
              fontFamily: 'Exo',
              marginTop: '10px'
            }}
          >
            IEO in progress
          </p>
        </div>
      </Grid>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <p style={{ fontFamily: 'Exo', marginLeft: '25px', marginTop: '15px' }}>
          {' '}
          Goal 53475 ETH{' '}
        </p>
      </Grid>
    </React.Fragment>
  );
}
export default withStyles(styles)(IEO);
