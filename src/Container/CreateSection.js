import React, { Component } from 'react';
import CreateSectionComponent from '../Components/CreateSection';
import CreateSectionComponent from '../Components/CreateSection';

 

class CreateSection extends Component{
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return(
            <CreateSectionComponent {...this.props} />
        )
    }
}