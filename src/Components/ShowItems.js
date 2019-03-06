import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import ShowItemComponent from '../Container/ShowItems';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',

  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

// const images = [
//   {
//     url: '/static/images/grid-list/breakfast.jpg',
//     title: 'Breakfast',
//     width: '50%',
//   },
//   {
//     url: '/static/images/grid-list/burgers.jpg',
//     title: 'Burgers',
//     //width: '30%',
//   },
//   {
//     url: '/static/images/grid-list/camera.jpg',
//     title: 'Camera',
//     //width: '30%',
//   },
// ];

// const gotoShowItemComponent = () =>{
//    this.props.history.push('/ShowItemComponent');
//  }

function ShowItemComponentTheme(props) {
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
    <div className={classes.root}>
      {buttonArr.map(arrayImageURL => (
        <ButtonBase
          focusRipple
          key={arrayImageURL.itemName}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width : "25%",
            height : '25%',
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${arrayImageURL.imageURL})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}  >
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {arrayImageURL.itemName}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
        
      ))}
      
    </div>
  );
}

ShowItemComponentTheme.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowItemComponentTheme);