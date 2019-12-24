import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: '10px',
    paddingBottom: '10px',

    [theme.breakpoints.down('sm')]: {
      marginBottom: '50px'
    }
  }
});

function Copyright(props) {
  const { classes } = props;

  return (

      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        width='100%'
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            cursor: 'pointer',
            color: '#889fb6'
          }}
        >
          <p
            style={{
              color: '#889fb6',
              paddingTop: '15px',
              fontFamily: 'Exo',
              fontSize: '16px',

            }}
          ></p>
            </Link>
            <div className="copyright" width='100%'>
                       <p> Disclaimer: QPay Global & WWW.QUANTAEX.COM is strictly suggesting to the citizens of Bangladesh, Pakistan, Srilanka and USA not to invest in QPay ecosystem & any of its concern. QPay Global is a legitimate platform which respects every countries local laws. Trading access to or holding positions on QuantaEx is prohibited for any person that is located in or a resident of the United States of America, Québec (Canada), Cuba, Crimea and Sevastopol, Iran, Syria, North Korea, Sudan, or any other jurisdiction where the services offered by QuantaEx are restricted. If it is determined that any QuantaEx trading participant has given false representations as to their location or place of residence, QuantaEx reserves the right to close any of their accounts immediately and to liquidate any open positions. This material should not be the basis for making investment decisions, nor be construed as a recommendation to engage in investment transactions, and is not related to the provision of advisory services regarding investment, tax, legal, financial, accounting, consulting or any other related services, nor is a recommendation being provided to buy, sell or purchase any good or product. Any views expressed on QuantaEx Research reports are the personal views of the authors. QuantaEx (or any affiliated entity) has not been involved in producing this report and the views contained in the report may differ from the views or opinions of QuantaEx.</p></div>

                         <div className="footer-copyright" width='100%'><p >© 2018 - 2019 WWW.QUANTAEX.COM & QPay Global. All rights reserved</p>
                        </div>

        </Grid>

  );
}

Copyright.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Copyright);
