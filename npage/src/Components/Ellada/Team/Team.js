import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import TeamCard from './TeamCard';
import face1 from '../../../Assets/img/team/face-1.png';
import face2 from '../../../Assets/img/team/face-2.png';
import face3 from '../../../Assets/img/team/face-3.png';
import face4 from '../../../Assets/img/team/face-4.png';
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
    marginLeft: '95px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px',
      marginTop: '7px'
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
    padding: '80px 20px',
    backgroundColor: '#f1f2f6'
  },
  TeamText: {
    color: 'black',
    opacity: '0.9',
    textAlign: 'center',
    fontSize: '17px',
    marginTop: '50px',
    marginBottom: '50px'
  }
}));

function Team() {
  const classes = useStyles();
  return (
    <section className={classes.Team}>
      <Grid container direction="row" justify="center" alignItems="center">
        <div className={classes.ImageContainer}>
          <h1 className={classes.Read1}> Team </h1>
          <h1 className={classes.Read2}> Meet Our Team </h1>
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
            <TeamCard
              TeamImg={face1}
              name="Harry"
              post="CEO"
              description="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit esse quam nihil molestiae."
            />
          </Fade>
          <Fade bottom>
            {' '}
            <TeamCard
              TeamImg={face2}
              name="Rina"
              post="implementing officer"
              description="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit esse quam nihil molestiae."
            />
          </Fade>
          <Fade bottom>
            {' '}
            <TeamCard
              TeamImg={face3}
              name="Donovon"
              post="CTO"
              description="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit esse quam nihil molestiae."
            />
          </Fade>
          <Fade bottom>
            {' '}
            <TeamCard
              TeamImg={face4}
              name="Terry"
              post="Cheif investment officer"
              description="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit esse quam nihil molestiae."
            />
          </Fade>
        </Grid>
      </Grid>
    </section>
  );
}

export default Team;
