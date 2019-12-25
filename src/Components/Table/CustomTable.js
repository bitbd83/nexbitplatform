import React from 'react';
import { Grid } from '@material-ui/core';
import CurrencyTable from './Table';
import Fade from 'react-reveal/Fade';

function CustomTable() {
  return (
    <Grid container>
      <Grid item lg={1} />
      <Grid item lg={10} xs={12} sm={12} md={12}>
        <Fade bottom>
          {' '}
          <CurrencyTable />{' '}
        </Fade>
      </Grid>{' '}
      <Grid item lg={1} />{' '}
    </Grid>
  );
}
export default CustomTable;
