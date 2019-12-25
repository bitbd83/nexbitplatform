import React from 'react';
import { Grid } from '@material-ui/core';

export default function PolicyHeader() {
  return (
    <Grid container>
      <Grid item lg={2} md={2} sm={12} xs={12}></Grid>
      <Grid
        item
        lg={8}
        md={8}
        sm={12}
        xs={12}
        style={{ background: '#4685ff' }}
      >
        <h2
          style={{
            color: 'white',
            padding: '20px 0px 20px 30px',
            fontFamily: 'Exo',
            fontWeight: '700'
          }}
        >
          Dexfin
        </h2>
      </Grid>
      <Grid item lg={2} md={2} sm={12} xs={12}></Grid>
    </Grid>
  );
}
