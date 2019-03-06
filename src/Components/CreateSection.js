import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core';
import * as firebase from 'firebase';

const styles ={
    Open : {
        display : 'flex',
        alignItems : 'end',
    },
}

class CreateSectionComponent extends Component {
  // constructor(){
  //   super();
  //   // this.state = {
  //   //   // open : false,
  //   //   // id : '',
  //   //   // name : '',
  //   //   // timeStamp : '',

  //   // }
  // }
  // state = {
  //   open: false,
  // };

//   nameHandler = (event) =>{
//     console.log(event.target.value);
//     this.setState({
//         [event.target.name] : event.target.value,
//     })
// }

  // handleClickOpen = () => {
  //   this.setState({ open: true });
  // };

  // handleClose = () => {
  //   this.setState({ open: false });
  // };
  // onSubmitClick = (event) => {
  //   this.props.gotoCreateSection()
  // }

  render() {
      const { classes } = this.props;
    return (
      <div>
        <Button variant="outlined" className={classes.Open} color="primary" onClick={()=>this.props.handleClickOpen()}>
          Create Section 
        </Button>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create Section</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText> */}
            <TextField
            onChange={this.props.nameHandler}
              autoFocus
              margin="dense"
              name="sectionName"
              id="name"
              label="Section Name"
              type="text"
              fullWidth
            />
            <input type='file' onChange={this.props.handleFile}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.gotoCreateSection} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CreateSectionComponent)