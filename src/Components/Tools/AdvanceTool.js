import React from 'react';
import { Grid } from '@material-ui/core';

function AdvanceTool() {
  return (
    <React.Fragment>
      <Grid container direction="row" justify="center" alignItems="center">
        <h1 className="advance-heading"></h1>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center">
        <p
          style={{ textAlign: 'center', fontFamily: 'Exo', marginTop: '20px' }}
        >
          
        </p>
      </Grid>
    </React.Fragment>
  );
}

export default AdvanceTool;
