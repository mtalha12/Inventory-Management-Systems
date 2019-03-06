import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core';
  
const styles ={
    Open : {
        display : 'flex',
        alignItems : 'end',
    },
}

class CreacteAddItemComponent extends Component {

  render() {
      const { classes } = this.props;
    return (
      <div>
        <Button variant="outlined" className={classes.Open} color="primary" onClick={ ()=>this.props.itemHandleClickOpen()}>
          Add Items 
        </Button>
        <Dialog
          open={this.props.openItem}
          onClose={this.props.itemHandleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Items</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              To subscribe to this website, please enter your email address here. We will send
              updates occasionally.
            </DialogContentText> */}
            <TextField
            onChange={this.props.itemNameHandler}
                id="itemName"
                label="Item Name"
                className={classes.textField}
                type="text"
                name="itemName"
                autoComplete="itemName"
                placeholder="Please Enter"
                margin="normal"
                variant="outlined"
              />
              <TextField
            onChange={this.props.itemNameHandler}
                id="itemSalePricePerUnit"
                label="Selling Price"
                className={classes.textField}
                type="number"
                name="itemSalePricePerUnit"
                autoComplete="itemSelePricePerUnit"
                placeholder="Please Enter"
                margin="normal"
                variant="outlined"
              />
             <TextField
             onChange={this.props.itemNameHandler}
              name="itemDiscription"
              id="outlined-textarea"
              label="Discription"
              placeholder="Please Enter"
              multiline
              className={classes.textField}
              margin="normal"
              variant="outlined"
            />
            <br />
            <input type='file' onChange={this.props.handleFile} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.itemHandleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.gotoCreateAddItem} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(CreacteAddItemComponent)