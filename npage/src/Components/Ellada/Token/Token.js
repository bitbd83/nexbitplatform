import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily = 'Exo';

const useStyles = makeStyles(theme => ({
  ChartContainer: {
    backgroundColor: '#E9EBF1',
    opacity: '0.9',
    marginTop: '80px'
  },
  ICO: {
    fontSize: '38px',
    fontFamily: 'Exo',
    fontWeight: '700',
    marginRight: '80px',
    lineHeight: '3.2rem',
    paddingTop: '50px',
    opacity: '0.9',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      lineHeight: '2rem',
      marginRight: '10px'
    }
  },
  ChartSection: {
    marginTop: '50px'
  },
  ICOText: {
    opacity: '0.9',
    fontSize: ' 17px',
    marginRight: '90px',
    lineHeight: '1.8rem',
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
  }
}));

const data = {
  labels: ['Artificial Intellect', 'Big Data', 'Blockchain'],
  datasets: [
    {
      data: [200, 300, 50],
      backgroundColor: ['#0aa4f9', '#3a5aff', '#46da60'],
      hoverBackgroundColor: ['#0aa4f9', '#3a5aff', '#46da60'],
      borderColor: ['#0aa4f9', '#3a5aff', '#46da60']
    }
  ]
};

function Token() {
  const classes = useStyles();
  return (
    <Grid container className={classes.ChartContainer}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <section className={classes.ChartSection}>
          {' '}
          <Doughnut data={data} height={200} />
        </section>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <section className={classes.ICOSection}>
          <h1 className={classes.ICO}>
            The Most Technological Platform for ICO
          </h1>
          <p className={classes.ICOText}>
            Open door policy work high performance keywords. Prethink Bob called
            an all-hands this afternoon, yet granularity, but mobile friendly.
            Level the playing field. Touch base after I ran into Helen at a
            restaurant, I realized she was just office pretty, yet into the
            weeds touch base three-martini lunch. Idea shower touch base.
            Imagineer screw the pooch, nor killing it pro-sumer software. Get
            all your ducks in a row quarterly sales are at an all-time low.
            Going forward we need to dialog around your choice of work attire
            please use "solutionise" instead of solution ideas! :) on your
            plate, so bench mark, for synergestic actionables move the needle.
            Customer centric close the loop strategic fit, nor bench mark.
          </p>
        </section>
      </Grid>
    </Grid>
  );
}

export default Token;
