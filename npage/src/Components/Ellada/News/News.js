import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import NewsCard from './NewsCard';
import Placeholder from '../../../Assets/ellada/image-post.jpg';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(theme => ({
  News: {
    backgroundColor: '#e9eaf0',
    padding: '60px 30px'
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
    width: '500px',
    [theme.breakpoints.down('sm')]: {}
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
    marginTop: '16px',
    fontWeight: '700',
    opacity: '0.7',
    display: 'block',
    marginLeft: '70px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
      marginTop: '7px',
      testAlign: 'center',
      marginLeft: '80px'
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
  JoinPresale: {
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
    marginTop: '25px'
  },
  TeamText: {
    color: 'black',
    opacity: '0.9',
    textAlign: 'center',
    fontSize: '17px',
    marginTop: '40px',
    marginBottom: '50px',
    fontFamily: 'Exo'
  }
}));

function News() {
  const classes = useStyles();
  return (
    <section className={classes.News}>
      <Grid container direction="row" justify="center" alignItems="center">
        <div className={classes.ImageContainer}>
          <h1 className={classes.Read1}> News </h1>
          <p className={classes.Read2}> Latest News Out US </p>
          <p className={classes.TeamText}>
            Onward and upward, productize the deliverables and focus on the
            bottom line drop-dead date translating our vision of having a market
            leading platfrom drop-dead date.
          </p>
        </div>
      </Grid>

      <Grid container>
        <Grid container direction="row" justify="center" alignItems="center">
          <Fade bottom>
            {' '}
            <NewsCard
              NewsImg={Placeholder}
              post="CEO"
              description="Lower supply is generating high price growth"
              time="22,09,2019"
            />
          </Fade>
          <Fade bottom>
            {' '}
            <NewsCard
              NewsImg={Placeholder}
              post="implementing officer"
              description="Introduction cryptocurrency bills to Congress"
              time="02,08,2019"
            />
          </Fade>
          <Fade bottom>
            <NewsCard
              NewsImg={Placeholder}
              post="CTO"
              description="Is relative value investing time finally here?"
              time="01,02,2019"
            />
          </Fade>
        </Grid>
      </Grid>

      <Grid container>
        <Grid container direction="row" justify="center" alignItems="center">
          <Button className={classes.JoinPresale}> More News</Button>
        </Grid>
      </Grid>
    </section>
  );
}

export default News;
