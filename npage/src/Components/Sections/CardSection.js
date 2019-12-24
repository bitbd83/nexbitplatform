import React from 'react';
import { Grid } from '@material-ui/core';
import Cards from './Card';
import { makeStyles } from '@material-ui/core/styles';
import Bitcoin from './CardCenter/Bitcoin';
import Invest from './CardCenter/Invest';
import IEO from './CardCenter/IEO';
import Transfer from './CardCenter/Transfer';
import visa from '../../Assets/visa.png';

const useStyles = makeStyles(theme => ({
  card: {
    [theme.breakpoints.up('md')]: {
      marginTop: '75px'
    }
  }
}));
function CardSection() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.card}
    >
      <Cards
        Tag={
          <a
            href=" https://pro.quantaex.com/trading/btcusdt"
            style={{ color: 'black', textDecoration: 'none' }}
          >
            Buy Bitcoin Now
          </a>
        }
        Title="Buy Bitcoin"
        Subtitle="Bitcoin and token markets"
        CardCenter={<Bitcoin />}
        Visa={<img src={visa} alt="visa" width="100px" height="30px" />}
      />
      <Cards
        Tag="Coming Soon"
        Title="Invest"
        Subtitle="Equity and commodity"
        CardCenter={<Invest />}
      />
      <Cards
        Tag="Coming Soon"
        Title=" Fundraise or Tokenize"
        Subtitle="Featured Initial Exchange Offerings"
        CardCenter={<IEO />}
      />
      <Cards
        Tag={
          <a
            href=" https://pro.quantaex.com/trading/btcusdt"
            style={{ color: 'black', textDecoration: 'none' }}
          >
            Get a Free Account Now
          </a>
        }
        Title="Transfer money"
        Subtitle="Instant transborder transfers"
        CardCenter={<Transfer />}
      />
    </Grid>
  );
}

export default CardSection;
