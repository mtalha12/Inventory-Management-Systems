import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase';
import '../FirebaseConfig';

const styles = {
    button: {
        fontSize : '10px',
        margin : '10px'
    },  
}
 

class SignIn extends Component{
    constructor(){
        super();
        this.state = ({
            email : '',
            password : '',
        })
    }

//  componentWillMount(){
//      if(localStorage.getItem('ID')){
//          this.props.history.push('./SignUpAppBar');
//      }
//  }

    nameHandler = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,
        })
      }

      signInClickHandler = (event) => {
          this.props.gotoSigin(this.state.email, this.state.password)
        // firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        // .then((result)=>{
        //     console.log(this.props);
        //     console.log(result);
        //     const userUID =result.user.uid;
        //     localStorage.setItem('ID' ,userUID);
        //     this.props.history.push('/');
        //     console.log(result);
        // })
        // .catch((error)=> {
        //     alert(error)
        //     // Handle Errors here.
        //     //var errorCode = error.code;
        //     //var errorMessage = error.message;
        //     // ...
        //   });

      }

    render(){
        const { classes } =this.props;
        return(
            <div>
                Email : 
                <input type="text" className='field' name='email' placeholder='Enter Email' onChange={this.nameHandler} />
                Password : 
                <input type="password" className='field' name='password' placeholder='Enter Password' onChange={this.nameHandler} />
               {/* <h2> SignIn </h2>
               <TextField
       onChange={this.nameHandler}
          id="email"
          name="email"
          label="Email"
          className={classes.textField}
          type="text"
          autoComplete="current-password"
          margin="normal"
          placeholder="eg: myname123@mail.com"
          />
          <br />
           <TextField
           onChange={this.nameHandler}
          id="standard-password-input"
          name="password"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          placeholder="Password"
          /> */}
           <Button 
                type='Button' 
                onClick={this.signInClickHandler}
                variant="contained" 
                color="primary" 
                className={classes.button}>
                SignIn
                </Button>
            </div>
        )
    }
}
export default withStyles(styles)(SignIn);