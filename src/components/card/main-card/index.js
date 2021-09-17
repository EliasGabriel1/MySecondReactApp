import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './../main-card/index.css'
const useStyles = makeStyles({
  root: {
    maxWidth: 550,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.src}
          title={props.title}
        />
        <CardActions className="sbtw">
            <Button size="small" color="primary">
                like
            </Button>
            <Button size="small" color="primary">
                Share
            </Button>
        </CardActions>
        <CardContent>
            <Typography gutterBottom variant="small" component="small">
                0 like
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
                {props.copyright} - {props.date}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.explanation}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}