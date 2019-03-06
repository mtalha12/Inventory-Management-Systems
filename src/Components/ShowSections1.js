// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Typography from '@material-ui/core/Typography';

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     minWidth: 300,
//     width: '100%',
//   },
//   image: {
//     position: 'relative',
//     height: 200,
//     [theme.breakpoints.down('xs')]: {
//       width: '100% !important', // Overrides inline-style
//       height: 100,
//     },
//     '&:hover, &$focusVisible': {
//       zIndex: 1,
//       '& $imageBackdrop': {
//         opacity: 0.15,
//       },
//       '& $imageMarked': {
//         opacity: 0,
//       },
//       '& $imageTitle': {
//         border: '4px solid currentColor',
//       },
//     },
//   },
//   focusVisible: {},
//   imageButton: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: theme.palette.common.white,
//   },
//   imageSrc: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center 40%',
//   },
//   imageBackdrop: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     top: 0,
//     bottom: 0,
//     backgroundColor: theme.palette.common.black,
//     opacity: 0.4,
//     transition: theme.transitions.create('opacity'),
//   },
//   imageTitle: {
//     position: 'relative',
//     padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
//   },
//   imageMarked: {
//     height: 3,
//     width: 18,
//     backgroundColor: theme.palette.common.white,
//     position: 'absolute',
//     bottom: -2,
//     left: 'calc(50% - 9px)',
//     transition: theme.transitions.create('opacity'),
//   },
// });

// // const images = [
// //   {
// //     url: '/static/images/grid-list/breakfast.jpg',
// //     title: 'Breakfast',
// //     width: '25%',
// //   },
// //   {
// //     url: '/static/images/grid-list/burgers.jpg',
// //     title: 'Burgers',
// //     width: '25%',
// //   },
// //   {
// //     url: '/static/images/grid-list/camera.jpg',
// //     title: 'Camera',
// //     width: '25%',
// //   },
// //   {
// //     url: '/static/images/grid-list/mobile.jpg',
// //     title: 'Mobile',
// //     width: '25%',
// //   },
// // ];



// function ShowSectionComponent1(props) {
//   const { classes } = props;
//   console.log('Hello' + props.sectionArrHandle);
//   let sectionArr = props.sectionArrHandle;
//   console.log(sectionArr);
//   const arr = [];
//   console.log(arr,"ok")
//   for (let key in sectionArr){
//     const newArr = sectionArr[key];
//     console.log(newArr);
//     arr.push(newArr)
//   }


//   return (
//     <div className={classes.root}>
//       {arr.map(arrayImageURL => (
//         <ButtonBase
//           focusRipple
//           key={arrayImageURL.title}
//           className={classes.image}
//           focusVisibleClassName={classes.focusVisible}
//           style={{
//             width: "100%",
//           }}
//         >

//         {console.log(arrayImageURL, "image123")}
//         {/* <image source={arrayImageURL.imageURL} style={{backgroundColor:"red"}}/> */}
        
//           <span
//             className={classes.imageSrc}
//             style={{
//               backgroundImage: `url(${arrayImageURL.imageURL})`,
//             }}
//           />
//           <span className={classes.imageBackdrop} />
//           <span className={classes.imageButton}>
//             <Typography
//               component="span"
//               variant="subtitle1"
//               color="inherit"
//               className={classes.imageTitle}
//             >
//               {arrayImageURL.title}
//               <span className={classes.imageMarked} />
//             </Typography>
//           </span> 
//         </ButtonBase>
//       ))}
//     </div>
//   );
// }

// ShowSectionComponent1.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ShowSectionComponent1);