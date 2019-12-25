import React from 'react';
import { Grid } from '@material-ui/core';

export default function PolicyFooter() {
  return (
    <Grid container>
      <Grid
        item
        lg={2}
        md={2}
        sm={12}
        xs={12}
        style={{ backgroundColor: '#E8E8E8' }}
      ></Grid>
      <Grid
        item
        lg={8}
        md={8}
        sm={12}
        xs={12}
        style={{ background: '#F0F0F0', border: '1px solid #E8E8E8' }}
      >
        <p
          style={{
            color: 'black',
            padding: '25px 0px 20px 30px',
            fontFamily: 'Exo',
            fontSize: '18px',
            fontWeight: 'revert'
          }}
        >
          Dexfin
        </p>
      </Grid>
      <Grid
        item
        lg={2}
        md={2}
        sm={12}
        xs={12}
        style={{ backgroundColor: '#E8E8E8' }}
      ></Grid>
    </Grid>
  );
}
