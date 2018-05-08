import React, { Component } from 'react';
import { Button, Modal, Card } from '@smartadtags/sta-components';
import config from '../../config';

class newComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            config,
            modalOpen: false,
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleOpen(){
        this.setState({ modalOpen: true })
    }
    handleClose(modalResult){
        this.setState({
            modalOpen: false,
            modalResult
        })
    }
    render(){
        return (
            <Card title="Modal con filtros" config={this.state.config.cardConfig}>
                <Modal
                    title="OPERATING SYSTEM"
                    config={this.state.config.modalConfig}
                    trigger={
                        <div style={{'textAlign': 'center'}}>
                            <Button onClick={this.handleOpen} type="primary" config={this.state.config.buttonConfig}>
                                {((this.state.modalResult===true)||(this.state.modalResult===false))?('Resultado de modal : '+this.state.modalResult):'Abrir Modal'}
                            </Button>
                        </div>

                    }
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    actions={
                        <div>
                            <Button onClick={() => {this.handleClose(false)}} type="third" config={this.state.config.buttonConfig}>Cancel</Button>
                            <Button onClick={() => {this.handleClose(true)}} type="primary" config={this.state.config.buttonConfig}>Save</Button>
                        </div>
                    }
                    style={{'textAlign': 'center'}}
                    >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Modal>
            </Card>
            
        )
    }
}
export default newComponent;
    