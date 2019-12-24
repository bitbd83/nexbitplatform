import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
const styles = theme => ({
  card: {
    width: 280,
    margin: '10px 10px',
    boxShadow: ' 5px 5px 20px 5px lightgrey',
    [theme.breakpoints.down('sm')]: {
      margin: '10px auto',
      width: 300
    }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Exo'
  },
  pos: {
    marginBottom: 12
  },
  Tag: {
    display: 'block',
    width: '100%',
    color: 'black',
    fontSize: '13px',
    fontWeight: '550',
    fontFamily: 'Exo'
  },
  SubTitle: {
    fontFamily: 'Exo',
    fontSize: '13px',
    opacity: '0.8'
  }
});

function Cards(props) {
  const { classes } = props;

  return (
    <Card className={`${classes.card} `}>
      <CardContent>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography className={classes.title}>{props.Title}</Typography>
          <div>{props.Visa}</div>
        </Grid>

        <Typography className={classes.SubTitle} gutterBottom={true}>
          {props.Subtitle}
        </Typography>

        <div style={{ height: '180px' }}>{props.CardCenter}</div>
      </CardContent>
      <CardActions>
        <Button size="large" variant="outlined" className={classes.Tag}>
          {props.Tag}
        </Button>
      </CardActions>
    </Card>
  );
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cards);
