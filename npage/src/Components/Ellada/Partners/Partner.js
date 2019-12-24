import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo1 from '../../../Assets/img/bg-main/logo-partners/logo-w-1.png';
import Logo2 from '../../../Assets/img/bg-main/logo-partners/logo-w-2.png';
import Logo3 from '../../../Assets/img/bg-main/logo-partners/logo-w-3.png';
import Logo4 from '../../../Assets/img/bg-main/logo-partners/logo-w-4.png';
import Logo5 from '../../../Assets/img/bg-main/logo-partners/logo-w-5.png';
import Logo6 from '../../../Assets/img/bg-main/logo-partners/logo-w-6.png';
import Logo7 from '../../../Assets/img/bg-main/logo-partners/logo-w-7.png';
import Logo8 from '../../../Assets/img/bg-main/logo-partners/logo-w-8.png';
import Fade from 'react-reveal/Fade';

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
    padding: '10px 20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
      padding: '40px 20px'
    }
  },
  ReadText: {
    opacity: '0.9',
    fontSize: ' 17px',
    marginRight: '80px',
    lineHeight: '1.8rem',
    marginTop: '20px',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0px',
      lineHeight: '1.5rem',
      fontSize: ' 15px',
      marginTop: '50px'
    }
  },
  ICOSection: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: '20px'
    }
  },
  PartnerSection: {
    height: '600px',
    backgroundColor: '#e9eaf0',
    padding: '40px 20px',
    [theme.breakpoints.down('md')]: {
      height: '900px'
    }
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
    position: 'relative'
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
    marginLeft: '-50px',
    fontFamily: 'Exo',
    [theme.breakpoints.down('sm')]: {
      fontWeight: '700',
      textTransform: 'uppercase',
      lineHeight: '2.625rem',
      color: 'grey',
      zIndex: '-1',
      opacity: '0.15',
      fontSize: '30px',
      marginLeft: '0px'
    }
  },
  Read2: {
    fontSize: '38px',
    lineHeight: '0rem',
    color: 'black',
    fontFamily: 'Exo',
    position: 'absolute',
    left: '0px',
    top: '30px',
    zIndex: '1',
    marginTop: '45px',
    fontWeight: '700',
    opacity: '0.7',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
      lineHeight: '2.5rem',
      color: 'black',
      fontFamily: "'Montserrat', sans-serif",
      position: 'absolute',
      left: '0px',
      zIndex: '1',
      marginTop: '-12px',
      fontWeight: '700',
      opacity: '0.7'
    }
  },

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
    marginLeft: '-70px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  ReadImg: {
    padding: '50px'
  },
  BigCloud: {
    height: '240px',
    width: '440px',
    marginLeft: '150px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  PdfDoc: {
    width: '310px',
    height: '390px',
    marginTop: '-170px',
    marginLeft: '70px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  ReadMobile: {
    display: 'none'
  },
  Partner: {
    [theme.breakpoints.down('md')]: {
      margin: '20px'
    }
  },
  secondrow: {
    marginTop: '100px',
    marginBottom: '100px',
    [theme.breakpoints.down('md')]: {
      marginTop: '10px'
    }
  }
}));

function Partners() {
  const classes = useStyles();
  return (
    <Grid container className={classes.PartnerSection}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <section className={classes.ReadSection}>
          <div className={classes.ImageContainer}>
            <h1 className={classes.Read1}> Partners </h1>
            <h1 className={classes.Read2}> Our Partners </h1>
          </div>
        </section>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Fade bttom>
          {' '}
          <div className={classes.Partner}>
            <img src={Logo1} alt="logo1" width="200px" height="40px" />{' '}
          </div>
        </Fade>
        <Fade bottom>
          {' '}
          <div className={classes.Partner}>
            {' '}
            <img src={Logo2} alt="logo2" width="200px" height="40px" />
          </div>
        </Fade>
        <Fade bottom>
          {' '}
          <div className={classes.Partner}>
            {' '}
            <img src={Logo3} alt="logo3" width="200px" height="40px" />
          </div>
        </Fade>
        <Fade bottom>
          {' '}
          <div className={classes.Partner}>
            {' '}
            <img src={Logo4} alt="logo4" width="200px" height="40px" />{' '}
          </div>
        </Fade>
      </Grid>

      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className={classes.secondrow}
      >
        <Fade bottom>
          {' '}
          <div className={classes.Partner}>
            <img src={Logo5} alt="logo5" width="200px" height="40px" />{' '}
          </div>
        </Fade>
        <Fade bottom>
          {' '}
          <div className={classes.Partner}>
            {' '}
            <img src={Logo6} alt="logo6" width="200px" height="40px" />{' '}
          </div>
        </Fade>
        <Fade bottom>
          {' '}
          <div className={classes.Partner}>
            {' '}
            <img src={Logo7} alt="logo7" width="200px" height="40px" />
          </div>
        </Fade>
        <Fade bottom>
          {' '}
          <div className={classes.Partner}>
            {' '}
            <img src={Logo8} alt="logo8" width="200px" height="40px" />
          </div>
        </Fade>
      </Grid>
    </Grid>
  );
}

export default Partners;
