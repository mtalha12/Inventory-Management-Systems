import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    marginBottom: '15px',
    //paddingBottom : '10%',
      width : '20%',
    //height : '10%',
      margin : '2px',
  },
  media: {
  },
  MainDiv: {
    justifyContent : 'space-evenly',
      display : 'flex',
      flexWrap : 'wrap',
       margin : '10px',
      //minWidth : '25%',
  },
  Content: {
    padding : '6px',
  }
};

function ShowItemCardComponent(props) {
  const { classes } = props;
  //console.log(props);
  console.log('Hello' + props.itemArrHandle);
  let itemArr = props.itemArrHandle;
  console.log(itemArr);
  const buttonArr = [];
  console.log(buttonArr,"ok")
  for (let key in itemArr){
    const newArr = itemArr[key];
    console.log(newArr);
    buttonArr.push(newArr)
  }
  return (
      <div className={classes.MainDiv}>
          {buttonArr.map(arrayImageURL => (
    <Card className={classes.card}>
      <CardActionArea className={classes.Area}>
        <CardMedia
          component="img"
          className={[classes.media, classes.img].join(" ")}
          //showItemImage={props.showItemImage}
          image={arrayImageURL.imageURL}
          height={"90"}
          width={"90"}

         // image="/static/images/cards/contemplative-reptile.jpg"
          title={props.showTitle}
        />
        <CardContent className={classes.Content}>
          <Typography gutterBottom variant="h6" component="h6" >
            {arrayImageURL.itemName}
          </Typography>
          <Typography component="p">
            {arrayImageURL.itemDiscription}            
          </Typography>
          <Typography gutterBottom variant="" component="" >
            Price : {arrayImageURL.itemSalePricePerUnit}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Update
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
          ))}
    </div>
  );
}

ShowItemCardComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowItemCardComponent)