import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import FaqBg from '../../../Assets/ellada/faq.png';
import ProgessBar from '../Fundraising/Progress';
const useStyles = makeStyles(theme => ({
  Read: {
    fontSize: '38px',
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '700',
    lineHeight: '3.2rem',
    paddingTop: '50px',
    opacity: '0.9',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      lineHeight: '2rem',
      marginRight: '10px'
    }
  },
  ReadSection: {
    marginLeft: '80px',
    padding: '80px 20px'
  },
  ReadText: {
    opacity: '0.9',
    fontSize: ' 17px',
    marginRight: '90px',
    lineHeight: '1.8rem',
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '10px',
      lineHeight: '1.5rem',
      fontSize: ' 15px'
    }
  },
  ICOSection: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: '20px'
    }
  },
  Whitepaper: {
    backgroundColor: '#f1f2f6'
  },
  Docs: {
    fontfamily: "'Montserrat', sans-serif",
    fontWeight: '900',
    fontSize: '4.5rem',
    opacity: '0.15',
    textTransform: 'uppercase',
    lineHeight: '5.625rem',
    position: 'absolute',
    top: '-50px',
    color: '#cdd6f6',
    zIndex: '-1',
    marginTop: '400px'
  },
  ImageContainer: {
    position: 'relative',
    width: '700px',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  Read1: {
    fontWeight: '900',
    fonSize: '4.5rem',
    textTransform: 'uppercase',
    lineHeight: '5.625rem',
    color: 'grey',
    zIndex: '-1',
    opacity: '0.15',
    fontSize: '55px',
    textAlign: 'center',
    fontFamily: 'Exo',
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px'
    }
  },
  Read2: {
    fontSize: '38px',
    lineHeight: '3.30rem',
    color: 'black',
    fontFamily: 'Exo',
    position: 'absolute',
    top: '30px',
    zIndex: '1',
    marginTop: '18px',
    fontWeight: '700',
    opacity: '0.7',
    display: 'block',
    marginLeft: '95px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
      marginTop: '7px',
      marginLeft: '0px auto',
      display: 'block'
    }
  },
  [theme.breakpoints.down('sm')]: {},
  Download: {
    backgroundImage:
      'linear-gradient(to right,  #3a5aff, #0071ff, #0084ff, #0095ff, #0aa4f9 )',
    fontWeight: '700',
    textDecoration: 'none',
    outline: 'none',
    transition: '0.2s',
    borderRadius: '50px',
    boxShadow: 'none',
    textShadow: 'none',
    zIndex: '1',
    lineHeight: '1',
    color: '#ffffff',
    padding: '0.650rem 3.35rem',
    fontSize: '0.875rem',
    textTransform: 'capitalize',
    fontFamily: "'Open Sans', sans-serif",
    marginTop: '20px',
    marginLeft: '20px'
  },
  SmallCloud: {
    display: 'block',
    width: '220px',
    height: '140px',
    marginTop: '-20px',
    marginLeft: '-70px'
  },
  ReadImg: {
    padding: '50px'
  },
  BigCloud: {
    height: '240px',
    width: '440px',
    marginLeft: '150px'
  },
  PdfDoc: {
    width: '310px',
    height: '390px',
    marginTop: '-170px',
    marginLeft: '70px'
  },
  Team: {
    backgroundImage: `url('${FaqBg}')`,
    height: '600px',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 600px',
    padding: '40px 20px',
    backgroundColor: '#f1f2f6',
    [theme.breakpoints.down('md')]: {
      height: '100%',
      backgroundImage: 'none'
    }
  },
  TeamText: {
    color: 'black',
    opacity: '0.9',
    textAlign: 'center',
    fontSize: '17px',
    marginTop: '50px',
    marginBottom: '50px',
    fontFamily: 'Exo'
  },
  Percent: {
    color: '#008cfd',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '70px',
    fontWeight: '800'
  }
}));

function Fundraising() {
  const classes = useStyles();
  return (
    <section className={classes.Team}>
      <Grid container direction="row" justify="center" alignItems="center">
        <div className={classes.ImageContainer}>
          <h1 className={classes.Read1}> Goal </h1>
          <h1 className={classes.Read2}> Fundraising Goal </h1>
          <p className={classes.TeamText}>
            Onward and upward, productize the deliverables and focus on the
            bottom line drop-dead date translating our vision of having a market
            leading platfrom drop-dead date.
          </p>
        </div>
      </Grid>
      <Grid container direction="row" justify="center" alignItems="center">
        <div>
          <p className={classes.Percent}>73%</p>
        </div>
        <div style={{ marginTop: '-5px' }}>
          <span
            style={{
              marginLeft: '20px',
              fontSize: '16px',
              fontWeight: '600',
              color: '#555',
              fontfamily: 'Exo'
            }}
          >
            Total riased
          </span>{' '}
          <br />{' '}
          <span
            style={{
              marginLeft: '20px',

              fontSize: '28px',
              fontWeight: '800',
              lineHeight: '30px',
              color: '#333',
              fontfamily: 'Exo'
            }}
          >
            36529 ETH{' '}
          </span>
        </div>
      </Grid>
      <ProgessBar />
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <div>
          <p
            style={{
              marginLeft: '20px',
              fontSize: '16px',
              fontWeight: '600',
              color: '#555',
              fontfamily: 'Exo'
            }}
          >
            Soft cap Reached
          </p>
          <p
            style={{
              marginLeft: '20px',

              fontSize: '28px',
              fontWeight: '800',
              lineHeight: '30px',
              color: '#333',
              fontfamily: 'Exo'
            }}
          >
            {' '}
            7500 ETH
          </p>
        </div>
        <div>
          <p
            style={{
              marginLeft: '20px',
              fontSize: '16px',
              fontWeight: '600',
              color: '#555',
              fontfamily: 'Exo'
            }}
          >
            Hard Cap{' '}
          </p>
          <p
            style={{
              marginLeft: '20px',

              fontSize: '28px',
              fontWeight: '800',
              lineHeight: '30px',
              color: '#333',
              fontfamily: 'Exo'
            }}
          >
            50000 ETH
          </p>
        </div>
      </Grid>
    </section>
  );
}

export default Fundraising;
