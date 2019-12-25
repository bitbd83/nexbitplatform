import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SmallCloud from '../../../Assets/ellada/small-cloud.png';
import BigCloud from '../../../Assets/ellada/big-cloud.png';
import PdfDoc from '../../../Assets/ellada/pdf-doc.png';
import { Animated } from 'react-animated-css';
import Zoom from 'react-reveal/Zoom';

const useStyles = makeStyles(theme => ({
  Read: {
    fontSize: '38px',
    fontFamily: 'Exo',
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
    padding: '80px 20px',
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
    fontFamily: 'Exo',
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
    fontFamily: 'Exo',
    fonSize: '4.5rem',
    textTransform: 'uppercase',
    lineHeight: '5.625rem',
    color: 'grey',
    zIndex: '-1',
    opacity: '0.15',
    fontSize: '55px',
    marginLeft: '-50px',
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
  }
}));

function Whitepaper() {
  const classes = useStyles();
  return (
    <Grid container className={classes.Whitepaper}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <section className={classes.ReadSection}>
          <div className={classes.ImageContainer}>
            <h1 className={classes.Read1}> our docs </h1>
            <h1 className={classes.Read2}> Read Our Whitepaper </h1>
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
          <Button className={classes.Download}> Download </Button>
          <img
            className={classes.SmallCloud}
            src={SmallCloud}
            alt="small-cloud"
          />
        </section>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <section className={classes.ReadImg}>
          <img src={BigCloud} alt="big-cloud" className={classes.BigCloud} />

          <Zoom>
            {' '}
            <Animated
              animationIn="zoomInUp"
              animationOut="fadeOutUp"
              animationInDuration={1000}
              animationOutDuration={1000}
              isVisible={true}
            >
              {' '}
              <img src={PdfDoc} alt="pdf-doc" className={classes.PdfDoc} />
            </Animated>
          </Zoom>
        </section>
      </Grid>
    </Grid>
  );
}

export default Whitepaper;
