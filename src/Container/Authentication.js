import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as firebase from 'firebase';
import '../FirebaseConfig';
import SignUpForm from '../Components/SignUp';
import SignIn from '../Components/SignIn';

const styles = ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
  
  });

class AuthenticationComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            auth: true,
            anchorEl: null,
        };
    }

    componentWillMount(){
      console.log(this.state);
      if(localStorage.getItem('ID')){
          this.props.history.push('/');
      }
  }

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };
  doSignIn = (email , password) =>{
    console.log(email,password)
    firebase.auth().signInWithEmailAndPassword(email , password)
    .then((result)=>{
      console.log(this.props);
      console.log(result);
      const UserUID = result.user.uid;
      localStorage.setItem('ID', UserUID);
      this.props.history.push('/');
      console.log(result);
    })
    .catch((error) =>{
      alert(error)
    });
  }
  doSignUp = (email , password , firstName, lastName, repeatPassword, type) =>{
    console.log(email,password,firstName ,lastName ,repeatPassword ,type);
    if(repeatPassword !== password){
          alert('Repeated password is uncorrect');
        }
        else{
        firebase.auth().createUserWithEmailAndPassword(email , password)
        .then((data)=>{
          //const { firstName, lastName, email, donor }= this.state;
          console.log(data.user.uid);
          const obj = {
            uid: data.user.uid,
            firstName, 
            lastName,
            email,
            type,
            //donor,
          }
          firebase.database().ref('user').child(data.user.uid).set(obj).then((resolve) => {
            //this.props.history.push('/');
          })
          alert('Welcome to Inventory management system.Please SignIn first then enjoy.')    

        })
        .catch(function(error) {
          console.log(error);
          alert(error);
          // Handle Errors here.
          //var errorCode = error.code;
          //var errorMessage = error.message;
            });
        }   
  }

  render() {
    const { classes } = this.props;
    //const { auth, anchorEl } = this.state;
    //const open = Boolean(anchorEl);
    console.log(this.props)
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4" color="inherit" className={classes.grow}>
              <i>Inventory Management System</i>
            </Typography>
            <SignIn 
            {...this.props}
             gotoSigin={this.doSignIn}
            />
          </Toolbar>
        </AppBar>
        <SignUpForm
        {...this.props}
        gotoSignUp={this.doSignUp}
        />
      </div>
    );
  }
}

AuthenticationComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AuthenticationComponent); 