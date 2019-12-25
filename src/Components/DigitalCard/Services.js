import React from 'react';
import ServiceCard from '../Sections/ServiceCard';
import { Grid } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  ServiceCard: {
    [theme.breakpoints.only('sm')]: {
      marginTop: '-20px'
    },
    [theme.breakpoints.only('xs')]: {
      marginTop: '-20px'
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '-50px'
    }
  }
}));

function DigitalCard() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.ServiceCard}
    >
      <Fade delay={500} duration={500}>
        <ServiceCard
          title="BUY CRYPTO WITH CREDIT CARDS"
          description="We've made your trading easier and more convenient with an integrated payment system."
        />
      </Fade>
      <Fade delay={800} duration={100}>
        {' '}
        <ServiceCard
          title="QUANTAEX EXCHANGE IN HOUR POCKET"
          description="Monitor the market, trade and transfer funds with your smartphone."
        />
      </Fade>
      <Fade delay={300} duration={50}>
        {' '}
        <ServiceCard
          title="SECURITY IS OUR FIRST PRIORITY"
          description="We store over 90% of all tokens in our cold wallets. All your funds are safe, Under your own control."
        />
      </Fade>
    </Grid>
  );
}

export default DigitalCard;
