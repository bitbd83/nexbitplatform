import React from 'react';
import { Grid } from '@material-ui/core';
function ImageSection() {
  return (
    <Grid container className="image-section">
      <Grid item lg={2} />
      <Grid item lg={8}>

      </Grid>
      <Grid item lg={2} />
    </Grid>
  );
}

export default ImageSection;
