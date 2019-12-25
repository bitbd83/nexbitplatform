import React from 'react';
import SignupForm from '../../../Assets/img/image-form.png';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  login: {
    backgroundImage:
      'linear-gradient(to right,  #3a5aff, #0071ff, #0084ff, #0095ff, #0aa4f9 )',
    fontWeight: '700',
    textDecoration: 'none',
    outline: 'none',
    transition: '0.2s',
    borderRadius: '50px',
    boxShadow: 'none',
    textShadow: 'none',
    lineHeight: '1',
    color: '#ffffff',
    padding: '0.650rem 3.35rem',
    fontSize: '0.875rem',
    textTransform: 'capitalize',
    fontFamily: "'Open Sans', sans-serif",
    marginTop: '10px'
  },
  label: {
    color: 'white',
    fontFamily: "'Open Sans', sans-serif",
    '&$focusedLabel': {
      color: '#8e8dbe'
    },
    '&$erroredLabel': {
      color: 'white'
    }
  },
  focusedLabel: { color: 'red' },
  erroredLabel: {},
  underline: {
    width: '350px',
    borderBottom: '2px solid white',
    '&$error:after': {
      borderBottomColor: 'white'
    },
    '&:after': {
      borderBottom: `1px solid white`
    },
    '&:hover:before': {
      borderBottom: `0px solid #FFFFFF`
    }
  },
  error: {}
}));
export default function Signup() {
  const classes = useStyles();

  return (
    <div className="form-wrap">
      <form action="/" className="signin-form">
        <div className="form-image">
          <img src={SignupForm} alt="signup" />
        </div>
        <div className="form-content">
          <h2>Sign Up</h2>
          <TextField
            label="Email Address"
            fullWidth={true}
            InputLabelProps={{
              classes: {
                root: classes.label,
                focused: classes.focusedLabel,
                error: classes.erroredLabel
              }
            }}
            InputProps={{
              classes: {
                root: classes.underline,
                error: classes.error
              }
            }}
            type="text"
            autoComplete="current-password"
            margin="normal"
          />

          <TextField
            label="Username"
            fullWidth={true}
            InputLabelProps={{
              classes: {
                root: classes.label,
                focused: classes.focusedLabel,
                error: classes.erroredLabel
              }
            }}
            InputProps={{
              classes: {
                root: classes.underline,
                error: classes.error
              }
            }}
            type="text"
            autoComplete="current-password"
            margin="normal"
          />
          <TextField
            label="Password"
            fullWidth={true}
            InputLabelProps={{
              classes: {
                root: classes.label,
                focused: classes.focusedLabel,
                error: classes.erroredLabel
              }
            }}
            InputProps={{
              classes: {
                root: classes.underline,
                error: classes.error
              }
            }}
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
          <div style={{ padding: '20px 10px' }}>
            <Link to="/login">
              {' '}
              <Button className={classes.login}>Log in</Button>
            </Link>

            <Button
              style={{
                color: 'white',
                fontFamily: "'Open Sans', sans-serif",
                textTransform: 'capitalize'
              }}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
