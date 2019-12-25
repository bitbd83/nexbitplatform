import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import serviceIcon from '../../Assets/icons/icon4.png';

const styles = theme => ({
  card: {
    maxWidth: 400,
    width: '400px',
    height: '200px',
    boxShadow: ' 5px 5px 20px 5px rgb(7, 13, 27)',
    marginTop: '20px',
    marginLeft: '20px',
    backgroundColor: 'rgb(8, 77, 120)',
    color: '#fff'
    },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 16,
    marginTop: '10px',
    fontFamily: 'Exo',
    display: 'block',
    width: '400px',
    fontWeight: '500',
    color: 'rgb(2, 7, 10)'
  },
  pos: {
    marginBottom: 12
  }
});

function ServiceCard(props) {
  const { classes } = props;

  return (
    <Card className={`${classes.card} 'card-root' `}>
      <CardContent>
        <img src={serviceIcon} alt="props-icons" />
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.title}
        </Typography>

        <Typography component="p" style={{ fontFamily: 'Exo' }}>
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

ServiceCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ServiceCard);
