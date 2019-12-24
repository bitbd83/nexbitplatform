import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

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
    fontFamily: 'Exo',
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
    marginTop: '18px',
    fontWeight: '700',
    opacity: '0.7',
    display: 'block',
    marginLeft: '100px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
      marginTop: '7px',
      marginLeft: '120px'
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
  TeamText: {
    color: 'black',
    opacity: '0.9',
    textAlign: 'center',
    fontSize: '17px',
    marginTop: '50px'
  }
}));

function Roadmap() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <section id="Roadmap" className="roadmap roadmap-white light-content">
        <Grid container direction="row" justify="center" alignItems="center">
          <div className={classes.ImageContainer}>
            <h1 className={classes.Read1}> Roadmap </h1>
            <h1 className={classes.Read2}> Our Roadmap </h1>
            <p className={classes.TeamText}>
              Onward and upward, productize the deliverables and focus on the
              bottom line drop-dead date translating our vision of having a
              market leading platfrom drop-dead date.
            </p>
          </div>
        </Grid>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-md-10 offset-md-1 offset-xl-0">
              <ul className="roadmap-items" style={{ listStyle: 'none' }}>
                <li>
                  <span className="dot"></span>
                  <span className="year">2018 2Q</span>
                  <h6>Cryptocurrencies introduced</h6>
                </li>
                <li>
                  <span className="dot"></span>
                  <span className="year">2019 1Q</span>
                  <h6>Cryptocurrencies introduced</h6>
                </li>
                <li>
                  <span className="dot"></span>
                  <span className="year">2019 22Q</span>
                  <h6>Cryptocurrencies introduced</h6>
                </li>
                <li>
                  <span className="dot"></span>
                  <span className="year">2019 4Q</span>
                  <h6>Cryptocurrencies introduced</h6>
                </li>
                <li>
                  <span className="dot"></span>
                  <span className="year">2020 1Q</span>
                  <h6>Cryptocurrencies introduced</h6>
                </li>
                <li>
                  <span className="dot"></span>
                  <span className="year">2020 2Q</span>
                  <h6>Cryptocurrencies introduced</h6>
                </li>
                <li>
                  <span className="dot"></span>
                  <span className="year">2020 4Q</span>
                  <h6>Cryptocurrencies introduced</h6>
                </li>
                <li>
                  <span className="dot"></span>
                  <span className="year">2021 1Q</span>
                  <h6>Cryptocurrencies introduced</h6>
                </li>
                <li>
                  <span className="dot"></span>
                  <span className="year">2021 2Q</span>
                  <h6>Cryptocurrencies introduced</h6>
                </li>
                <li>
                  <span className="dot"></span>
                  <span className="year">2021 3Q</span>
                  <h6>Cryptocurrencies introduced</h6>
                </li>
                <li>
                  <span className="dot"></span>
                  <span className="year">2021 4Q</span>
                  <h6>Cryptocurrencies introduced</h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Roadmap;
