import React, { Component } from 'react';
import { FilterBox } from '@smartadtags/sta-components';

class LayoutDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showBox : true
        }
    }

    componentWillMount() {
      console.log(this.props);
      this.props.enableFilters();
    }

    componentWillUnmount() {
      this.props.disableFilters();
    }

    render(){
        return (
            <div className="fake-box">
                <h1>Contenido</h1>
            </div>
        )
    }
}

export default LayoutDemo;
