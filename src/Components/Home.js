import React, { Component } from 'react';
import HomeComponent from "./Home";
import CreateSectionComponent from "./CreateSection";

class Home extends Component {
    constructor(){
        super();
        this.state = {
        }
    }
    
    render(){
        return(
            <div>
            <HomeComponent {...this.props}/>
            <CreateSectionComponent {...this.props} />
            </div>
        )
    }
}
export default Home