import React from 'react';
import { Grid } from '@material-ui/core';

function Trading() {
  return (
    <Grid container className="advance-tool">
      <Grid item lg={2} />
      <Grid item lg={8}>
        <h1 className="advance-heading">With the greatest return on investment</h1>
        <p
          style={{
            textAlign: 'center',
            lineHeight: '1.7rem',
            fontFamily: 'Exo',
            color: 'rgb(106, 100, 235)'
          }}
        >
          DSR can bring you the most profits out of all your investments.
        </p>
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
}

export default Trading;
