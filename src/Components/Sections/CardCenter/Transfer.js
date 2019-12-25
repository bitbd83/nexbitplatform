import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Map06 from '../../../Assets/maps.png';

const styles = theme => ({});

function Transfer(props) {
  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" alignItems="flex-start">
        <img
          src={Map06}
          alt="Map"
          width="300px"
          height="350px"
          style={{ marginTop: '-70px' }}
        />
      </Grid>
    </React.Fragment>
  );
}
export default withStyles(styles)(Transfer);
