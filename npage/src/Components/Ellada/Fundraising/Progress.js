import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles({
  root: {
    height: 18,
    backgroundColor: lighten('#c5c8cc', 0.1)
  },
  bar: {
    borderRadius: 0,
    backgroundColor: 'rgba(0, 132, 250, 1)'
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '80%',
    marginLeft: '100px',
    [theme.breakpoints.down('md')]: {
      margin: '0px auto',
      display: 'block'
    }
  },
  margin: {
    margin: theme.spacing(1),
    background: '#c5c8cc'
  }
}));

export default function CustomizedProgressBars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        value={73}
      />
    </div>
  );
}
