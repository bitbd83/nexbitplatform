import React from 'react';
import { Grid } from '@material-ui/core';

function TableHeading() {
  return (
    <Grid container>
      <Grid item lg={2} />
      <Grid item lg={8}>
        <h1 className="advance-heading">Market data</h1>
      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
}

export default TableHeading;
