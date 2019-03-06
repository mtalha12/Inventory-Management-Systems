import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class MyDrawer extends Component{
  clickHandler =()=>{
    console.log("Hello");
    // this.props.history.push('/HomeFurniture');
    
  }
  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          {['Home furniture', 'School furniture', 'Office furniture', 'Equipment'].map((text, index) => (
            <ListItem button key={text} onClick={ () =>this.clickHandler()}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <h2>Stokes</h2>
          <hr />
          {['Home furniture', 'School furnitre', 'Office furniture', 'Equipment'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    // const fullList = (
    //   <div className={classes.fullList}>
    //     <List>
    //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //         <ListItem button key={text}>
    //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    //           <ListItemText primary={text} />
    //         </ListItem>
    //       ))}
    //     </List>
    //     <Divider />
    //     <List>
    //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //         <ListItem button key={text}>
    //           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    //           <ListItemText primary={text} />
    //         </ListItem>
    //       ))}
    //     </List>
    //   </div>
    // );

    return (
      <div>
        
        <Drawer open={this.props.open} onClose={() =>{this.props.DrawerHandler(false)}}>
          <div
            tabIndex={0}
            role="button"
          >
            {sideList}
          </div>
        </Drawer>

      </div>
    );
  }
}

MyDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

const Sidebar= withStyles(styles)(MyDrawer);
export { Sidebar }  