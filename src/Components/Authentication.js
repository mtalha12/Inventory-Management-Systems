import React, { Component } from 'react';
import AuthenticationComponent from "./Authentication";


class Authentication extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
           <AuthenticationComponent {...this.props}/> 
        )
    }
};
export default Authentication
