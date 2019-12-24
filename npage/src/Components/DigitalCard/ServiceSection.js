import React from 'react';
import ServiceCard from '../Sections/ServiceCard';
import { Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade';

function DigitalCard() {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Fade delay={1000} duration={1200}>
        {' '}
        <ServiceCard
          title="OFFICIAL EU LICENSE (APPLIED)"
          description="Our operations and services are legal and transparent for your convenience."
        />
      </Fade>
      <Fade delay={1200} duration={1500}>
        {' '}
        <ServiceCard
          title="INSTANT 24/7 SUPPORT AT YOUR SERVICE"
          description="More possibilities for our respected clients. Customer satisfaction is our priority. Our help desk is always there for you."
        />
      </Fade>
      <Fade delay={1400} duration={1800}>
        {' '}
        <ServiceCard
          title="LAUNCH YOUR IEO ON QUANTAEX"
          description="Our exchange will open the doors for profitable and convenient investments in startups and new projects."
        />
      </Fade>
    </Grid>
  );
}

export default DigitalCard;
