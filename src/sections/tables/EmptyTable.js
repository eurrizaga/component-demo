import React, { Component } from 'react';
import noDataImg from "./resources/artwork.svg";
import {Image, Button} from '@smartadtags/sta-components';
import "./tables.css";
class emptyTable extends Component {
    constructor(props){ 
        super(props);
        this.state = {
            customColors: {"styles":{"primary":{"width":"100px", "height":"24px", "font-size": "12px"}}}
        }
    }
    render(){
        return <div className="emptyTableContainer flex">
            <div className="emptyTableImage">
                <Image src={noDataImg} />
            </div>
            <div className="emptyTableText">
                <p>No data available</p>
                <p>You don't have any offer to display, create your first offer</p>
                <Button config ={this.state.customColors} onClick={()=>{alert('hola')}}>Create offer</Button>
            </div>
        </div>
    }
}
export default emptyTable;