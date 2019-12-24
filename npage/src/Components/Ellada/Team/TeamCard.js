import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { SocialIcon } from 'react-social-icons';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250,
    height: 470,
    margin: '10px',
    borderRadius: '6px',
    [theme.breakpoints.down('sm')]: {
      minWidth: 300
    },
    '&:hover': {
      transition: 'transform 1s ease',
      transform: 'scale(1.03)',
      boxShadow: '5px 5px 5px 2px rgba(0, 0, 0, .5)'
    }
  },
  CardAction: {
    minHeight: '70px',
    maxHeight: '70px'
  },
  content: {
    minHeight: '230px'
  },
  Media: {
    marginLeft: '46px !important',
    borderRadius: '50%',
    marginTop: '20px',
    marginBottom: '5px',
    width: '150px',
    height: '150px',
    border: '5px solid #132965',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '70px !important',
      marginTop: '15px'
    }
  },
  IconSection: {
    margin: '0px auto 10px auto ',
    display: 'block',
    padding: '20px 0px'
  }
}));

function TeamCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.Media}
          component="img"
          alt="Contemplative Reptile"
          height="150"
          image={props.TeamImg}
          title={props.TeamTitle}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component="h2"
            style={{
              textAlign: 'center',
              margin: '5px',
              fontFamily: 'Exo',
              color: 'black',
              marginBottom: '10px',
              opacity: '0.9',
              fontWeight: '550'
            }}
          >
            {props.name}
          </Typography>
          <Typography
            variant="h5"
            component="h3"
            style={{
              textAlign: 'center',
              fontFamily: 'Exo',
              fontSize: '16px',
              color: '#132965',
              marginBottom: '10px'
            }}
          >
            {props.post}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              textAlign: 'center',
              marginTop: '20px',
              fontFamily: 'Exo',
              color: 'Black'
            }}
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.CardAction}>
        <section className={classes.IconSection}>
          <SocialIcon
            url="http://facebook.com"
            bgColor="rgba(0, 27, 87, 0.9)"
            fgColor="white"
            style={{ height: 36, width: 36 }}
          />
          <SocialIcon
            url="http://twitter.com"
            bgColor="rgba(0, 27, 87, 0.9)"
            fgColor="white"
            style={{ height: 36, width: 36, marginLeft: '8px' }}
          />
          <SocialIcon
            url="http://linkedin.com"
            bgColor="rgba(0, 27, 87, 0.9)"
            fgColor="white"
            style={{ height: 36, width: 36, marginLeft: '8px' }}
          />
        </section>
      </CardActions>
    </Card>
  );
}

export default TeamCard;
