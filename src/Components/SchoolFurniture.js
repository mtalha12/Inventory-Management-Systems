import React, { Componetnt, Component } from 'react';
import { WithStyles } from '@material-ui/core';



class SchoolFurniture extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                School Furniture
            </div>
        )
    }
}
export default WithStyles()(SchoolFurniture);