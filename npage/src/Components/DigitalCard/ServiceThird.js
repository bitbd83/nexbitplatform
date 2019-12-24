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
          title="SECURITY IS OUR FIRST PRIORITY"
          description="We store over 90% of all tokens in our cold wallets. All your funds are safe, Under your own control."
        />
      </Fade>
      <Fade delay={1200} duration={1500}>
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
