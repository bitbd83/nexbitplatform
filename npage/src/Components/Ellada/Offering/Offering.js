import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MobileBody from '../../../Assets/ellada/mobile-body.png';
import Fade from 'react-reveal/Fade';
import DemoCarousel from './DemoCarousel';

const useStyles = makeStyles(theme => ({
  Offering: {
    backgroundColor: '#e9eaf0'
  },
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
    padding: '40px 20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
      padding: '40px 20px'
    }
  },
  ReadText: {
    opacity: '0.9',
    fontSize: ' 17px',
    marginRight: '60px',
    lineHeight: '1.8rem',
    marginTop: '50px',
    fontFamily: 'Exo',
    [theme.breakpoints.down('sm')]: {
      marginRight: '10px',
      lineHeight: '1.5rem',
      fontSize: ' 15px',
      marginTop: '100px'
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
    lineHeight: '3rem',
    color: 'black',
    fontFamily: 'Exo',
    position: 'absolute',
    left: '0px',
    top: '0px',
    zIndex: '1',
    marginTop: '40px',
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
      marginTop: '16px'
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
    fontFamily: 'Exo',
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
    padding: '50px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  BigCloud: {
    height: '500px',
    width: '350x',
    marginLeft: '100px'
  },
  PdfDoc: {
    width: '310px',
    height: '390px',
    marginTop: '-170px',
    marginLeft: '70px'
  },
  Container: {
    position: 'relative',
    width: '290px',
    height: '500px',
    marginLeft: '0px'
  },
  TabletBody: {
    position: 'absolute',
    marginTop: '-25px',
    marginLeft: '-6px',
    width: '302px',
    height: '530px',
    bordreRadius: '50px'
  }
}));

function Offering() {
  const classes = useStyles();
  return (
    <Grid container className={classes.Offering}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <section className={classes.ReadSection}>
          <div className={classes.ImageContainer}>
            <h1 className={classes.Read1}> Offering </h1>
            <h1 className={classes.Read2}> Launch our final Round Offering </h1>
          </div>
          <p className={classes.ReadText}>
            Onward and upward, productize the deliverables and focus on the
            bottom line drop-dead date translating our vision of having a market
            leading platfrom drop-dead date. Let's not solutionize this right
            now parking lot it mobile friendly, so on this journey when does
            this sunset? so hard stop. Turd polishing game plan paddle on both
            sides. Highlights this vendor is incompetent so on-brand but
            completeley fresh for t-shaped individual. Driving the initiative
            forward high touch client productize.
          </p>
          <Button className={classes.Download}> Join Presale </Button>
        </section>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <section className={classes.ReadImg}>
          <Fade bottom>
            <div className={classes.Container}>
              <img
                src={MobileBody}
                alt="tablet-item-1"
                className={classes.TabletBody}
              />
              <DemoCarousel />
            </div>
          </Fade>
        </section>
      </Grid>
    </Grid>
  );
}

export default Offering;
