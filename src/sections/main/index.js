import React, { Component } from 'react';
import { Grid, DatepickerBar, Datepicker, Card } from '@smartadtags/sta-components';
import config from '../../config';

class mainSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config,
        };
        this.changeColor = this.changeColor.bind(this);
        this.toggleColorChangerVisible = this.toggleColorChangerVisible.bind(this);
    }

    changeColor(ref, color){
        var configStyles = this.state.config;
        var auxStyles = configStyles;
        for (var i = 0; i < ref.length - 1; i++){
            auxStyles = auxStyles[ref[i]];
        }
        auxStyles[ref[i]] = color;
        this.setState({
            config: configStyles
        });
    }
    toggleColorChangerVisible(id){
        var newState;
        if (this.state.colorChanger === id)
            newState = null;
        else
            newState = id;
        this.setState({
            colorChanger: newState
        })
    }
    render(){
        return (
            <div>
                <DatepickerBar config={this.state.config.calendarConfig}/>
                <Card title="Datepicker demo" config={this.state.config.cardConfig}>

                    <h3>Datepicker simple</h3>
                    <Grid columns={2} divided style={{'textAlign': 'center'}}>
                        <Grid.Row>
                            <Grid.Column>
                                <h4>Fecha única</h4>
                                <Datepicker config={this.state.config.calendarConfig}/>
                            </Grid.Column>
                            <Grid.Column>
                                <h4>Rango de fechas</h4>
                                <Datepicker dp-double config={this.state.config.calendarConfig} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card>
            </div>
            
        )
    }
}

export default mainSection;
    