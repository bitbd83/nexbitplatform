import React from 'react';
import { Grid } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import logoSymbol from '../../Assets/img/quantaex-sq.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Grid container style={{ background: 'rgb(2, 7, 10)' }}>
      <Grid item lg={1} md={1} />
      <Grid item lg={2} sm={12} xs={12} md={2}>
        <img
          src={logoSymbol}
          alt="logosymble"
          height="150px"
          width="150px"
          className="footer-img"
        />
      </Grid>
      <Grid item lg={2} md={2} sm={3}>
        <List>
          <ListItem
            style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Exo' }}
          >
            QUICK ACCESS
          </ListItem>
          <Link to="/trading/btcusdt" style={{ textDecoration: 'none' }}>
            {' '}
            <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
              Exchange
            </ListItem>{' '}
          </Link>
          <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
            <a
              href="/markets"
              style={{
                textDecoration: 'none',
                cursor: 'pointer',
                color: '#8c8c8c'
              }}
            >
              Markets{' '}
            </a>
          </ListItem>
          <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
            <a
              href="https://play.google.com/store/apps/details?id=org.qwallet&hl=en"
              style={{
                textDecoration: 'none',
                cursor: 'pointer',
                color: '#8c8c8c'
              }}
            >
              Wallet App{' '}
            </a>
          </ListItem>
          <Link
            to="/leaderboards"
            style={{ textDecoration: 'none', fontFamily: 'Exo' }}
          >
            {' '}
            <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
              Leaderboards
            </ListItem>{' '}
          </Link>
          <Link
            to="/fees"
            style={{ textDecoration: 'none', fontFamily: 'Exo' }}
          >
            {' '}
            <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
              Fees
            </ListItem>{' '}
          </Link>
          <Link
            to="/policy"
            style={{ textDecoration: 'none', fontFamily: 'Exo' }}
          >
            {' '}
            <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
              Apply for List
            </ListItem>{' '}
          </Link>
        </List>
      </Grid>
      <Grid item lg={2} md={2} sm={3}>
        <List>
          <ListItem
            style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Exo' }}
          >
            PLATFORM
          </ListItem>
          <Link to="/" style={{ textDecoration: 'none' }}>
            {' '}
            <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
              About Us
            </ListItem>{' '}
          </Link>
          <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
            <a
              href="/"
              style={{
                textDecoration: 'none',
                cursor: 'pointer',
                color: '#8c8c8c'
              }}
            >
              Coin Data{' '}
            </a>
          </ListItem>
          <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
            <a
              href="/"
              style={{
                textDecoration: 'none',
                cursor: 'pointer',
                color: '#8c8c8c'
              }}
            >
              Announcements{' '}
            </a>
          </ListItem>
          <Link
            to="/"
            style={{ textDecoration: 'none', fontFamily: 'Exo' }}
          >
            {' '}
            <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
              Privacy Policy
            </ListItem>{' '}
          </Link>
          <Link
            to="/"
            style={{ textDecoration: 'none', fontFamily: 'Exo' }}
          >
            {' '}
            <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
              Term of Condition
            </ListItem>{' '}
          </Link>
        </List>
      </Grid>
      <Grid item lg={2} md={2} sm={3}>
        <List>
          <ListItem
            style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Exo' }}
          >
            API
          </ListItem>
          <Link to="/" style={{ textDecoration: 'none' }}>
            {' '}
            <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
              Trade API (Public)
            </ListItem>{' '}
          </Link>
          <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
            <a
              href="/"
              style={{
                textDecoration: 'none',
                cursor: 'pointer',
                color: '#8c8c8c'
              }}
            >
              Markets API {' '}
            </a>
          </ListItem>
          <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
            <a
              href="/"
              style={{
                textDecoration: 'none',
                cursor: 'pointer',
                color: '#8c8c8c'
              }}
            >
              API Documentations{' '}
            </a>
          </ListItem>
          <Link
            to="/"
            style={{ textDecoration: 'none', fontFamily: 'Exo' }}
          >
            {' '}
            <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
              Currency Details API
            </ListItem>{' '}
          </Link>
        </List>
      </Grid>
      <Grid item lg={2} md={2} sm={3}>
        <List>
          {' '}
          <ListItem
            style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Exo' }}
          >
            CONTACT
          </ListItem>
          <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
            {' '}
            Business: business@qpay.group
          </ListItem>
          <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
            {' '}
            Partnership: info@qpay.group
          </ListItem>
          <a href="https://help.qpay.group" style={{ textDecoration: 'none' }}>
            {' '}
            <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
              Customer Service
            </ListItem>{' '}
          </a>
          <a href="/status" style={{ textDecoration: 'none' }}>
            {' '}
            <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
              System Status
            </ListItem>{' '}
          </a>
          <ListItem style={{ color: '#8c8c8c', fontFamily: 'Exo' }}>
            <a
              href="https://t.me/qpayglobal"
              style={{ color: '#8c8c8c', textDecoration: 'none' }}
            >
              {' '}
              <i className="fab fa-telegram icon-style" />
            </a>
            <a
              href="https://twitter.com/QPaygroup"
              style={{ color: '#8c8c8c', textDecoration: 'none' }}
            >
              {' '}
              <i className="fab fa-twitter icon-style " />
            </a>
            <a
              href="/"
              style={{ color: '#8c8c8c', textDecoration: 'none' }}
            >
              {' '}
              <i className="fab fa-facebook-f icon-style" />
            </a>
            <a
              href = "https://github.com/QuantaPay"
              style={{ color: '#8c8c8c', textDecoration: 'none' }}
            >
              {' '}
              <i className="fab fa-github icon-style " />
            </a>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

export default Footer;
