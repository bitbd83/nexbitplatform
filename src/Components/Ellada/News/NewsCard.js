import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 320,
    height: 380,
    margin: '10px',
    borderRadius: '6px',
    '&:hover': {
      transition: '0.5s ease',
      marginTop: '-20px'
    }
  }
});

function NewsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Place an image address here"
          height="180"
          image={props.NewsImg}
          title={props.TeamTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="p">
            <i
              className="far fa-folder"
              style={{ fontSize: '16px', marginLeft: '50px' }}
            >
              <span style={{ marginLeft: '3px', fontFamily: 'Exo' }}>
                {' '}
                Events{' '}
              </span>
            </i>
            <i
              className="far fa-clock"
              style={{ fontSize: '16px', marginLeft: '10px' }}
            >
              <span style={{ marginLeft: '3px', fontFamily: 'Exo' }}>
                {' '}
                {props.time}{' '}
              </span>
            </i>
          </Typography>

          <Typography
            variant="h5"
            component="h1"
            style={{
              color: 'black',
              fontFamily: 'Exo',
              fontWeight: 'bold',
              textAlign: 'center',
              opacity: '0.9',
              marginTop: '10px'
            }}
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default NewsCard;
