import React from 'react';
import { Grid } from '@material-ui/core';

function Digital() {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      >
    <div style={{ marginTop: '20px',color: 'rgb(212, 54, 18)',fontsize: '28' }}>
    <p> A Premier Global Digital Asset Trading Platform </p>

        <p><hr />
          We are dedicated to giving traders and hodlers a safe place to trade
          and store cryptocurrencies like BTC, ETH.
        </p>
</div>
    </Grid>
  );
}

export default Digital;
