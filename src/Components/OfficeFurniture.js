import React, { Componetnt, Component } from 'react';
import { WithStyles } from '@material-ui/core';



class OfficeFurniture extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                Office Furniture
            </div>
        )
    }
}
export default WithStyles()(OfficeFurniture);