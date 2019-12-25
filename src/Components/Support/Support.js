import React from 'react';
import { Grid } from '@material-ui/core';
import isupport from '../../Assets/icons/support-2.svg';
import igrow from '../../Assets/icons/grow.svg';
import idw from '../../Assets/icons/deposit-withdrawal.svg';
function Support() {
  return (
    <section style={{ backgroundColor: 'rgb(0, 3, 10)' }}>
      <div className="support-section">
        <Grid container spacing={6}>
          <Grid item lg={4} xs={8}>
            {' '}
            <img
              src={isupport}
              alt="icon"
              width="100px"
              height="60px"
              className="image-center"
            />{' '}
            <h4 className="support-text">24 Hour Support</h4>
          </Grid>
          <Grid item lg={4} xs={8}>
            <img
              src={igrow}
              alt="icon"
              width="80px"
              height="60px"
              className="image-center"
            />
            <h4 className="support-text">Growing Functionality</h4>
          </Grid>
          <Grid item lg={4} xs={8}>
            <img
              src={idw}
              alt="icon"
              width="80px"
              height="60px"
              className="image-center"
            />
            <h4 className="support-text">Fast Deposits & Withdrawals</h4>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
export default Support;
