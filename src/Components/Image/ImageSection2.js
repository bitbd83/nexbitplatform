import React from 'react';
import { Grid } from '@material-ui/core';
import image from '../../Assets/Laptop.png';
import Fade from 'react-reveal/Fade';

function ImageSection2() {
  return (
    <Grid container className="section-bg">
      <Grid item lg={2}></Grid>
      <Grid item lg={8}>
        <section style={{ marginTop: '-80px' }}>
          <Fade left>
            <img src={image} alt="logo" width="100%" height="100%" />
          </Fade>
        </section>
      </Grid>
      <Grid item lg={2}></Grid>
    </Grid>
  );
}
export default ImageSection2;
