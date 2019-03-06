import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import '../FirebaseConfig';

const styles = {
  root: {
    flexGrow: 1,
  },
  SignUpForm: {
    margin : '10px',
  },
};

class SignUpForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            repeatPassword:'',
            type: 'store',
            donor : false,
        }
        
    }
//    componentWillMount =()=>{
//        if(localStorage.getItem('ID')){
//        }
//      }
      nameHandler = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        })
      }
      
      signUpClickHandler= (event) => {
        this.props.gotoSignUp(
          this.state.email, this.state.password,
            this.state.firstName, this.state.lastName, 
            this.state.repeatPassword, this.state.type)
        // if(this.state.repeatPassword !== this.state.password){
        //   alert('Repeated password is uncorrect');
        // }
        // else{
        // firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        // .then((data)=>{
        // const { firstName, lastName, email, donor }= this.state;
        //   console.log(data.user.uid);
        //   const obj = {
        //     uid: data.user.uid,
        //     firstName, 
        //     lastName,
        //     email,
        //     donor,
        //   }
        //   firebase.database().ref('user').child(data.user.uid).set(obj).then((resolve) => {
        //     //this.props.history.push('/');
        //   })
        //   console.log('Welcome');  
        //   alert('Welcome to Inventory management system.Please SignIn first then enjoy.')    

        // })
        // .catch(function(error) {
        //   alert(error);
        //   // Handle Errors here.
        //   //var errorCode = error.code;
        //   //var errorMessage = error.message;
        //     });
        //   }
      }
      
      checkInput(){
        return!(this.state.firstName.length && this.state.lastName.length)
      }

    render(){
        const { classes } = this.props;
        return (
           <div className={classes.SignUpForm}>
             <h1><i>Create a new account</i></h1>
       <TextField
       onChange={this.nameHandler}
          id="firstName"
          name="firstName"
          label="First Name"
          className={classes.textField}
          type="text"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
       <TextField
       onChange={this.nameHandler}
          id="lastName"
          name="lastName"
          label="Last Name"
          className={classes.textField}
          type="text"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
       <TextField
       onChange={this.nameHandler}
          id="email"
          name="email"
          label="Email"
          className={classes.textField}
          type="text"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
       <TextField
       onChange={this.nameHandler}
          id="password"
          name="password"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
           <TextField
           onChange={this.nameHandler}
          id="repeatPassword"
          name="repeatPassword"
          label="Repeat Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          placeholder="Please Enter"
          />
          <br />
          <br />
                 {/* <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.genderRadioGroupHandler}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<Radio />}
              label="(Disabled option)"
            />
          </RadioGroup>
        </FormControl> */}
          <Button 
          disabled={this.checkInput()}
          type='submit' 
          onClick={this.signUpClickHandler}
          variant="contained" 
          color="primary" 
          className={classes.button}>
          Sign Up
          </Button>
           </div>
          );
    }
}

//SignUpAppBar.propTypes = {
//  classes: PropTypes.object.isRequired,
//};

export default withStyles(styles)(SignUpForm);






