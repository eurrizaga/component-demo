import React, { Component } from 'react';
import { Button, Grid, Image, Card } from '@smartadtags/sta-components'
import './css/loginStyles.css';
import LoginForm from './loginForm';
import LoginForgotPassword from './loginForgotPassword';
import LoginMailSent from './loginMailSent';
import LoginPasswordReset from './loginPasswordReset';
import LoginNewPassword from './loginNewPassword';
import logo from './resources/img/logo.png';

class newComponent extends Component {
    state = {screen: 1};
    render(){
        const renderBox = () =>{
            switch (this.state.screen){
                case 1: return (<LoginForm />)
                case 2: return (<LoginForgotPassword />)
                case 3: return (<LoginMailSent />)
                case 4: return (<LoginPasswordReset />)
                case 5: return (<LoginNewPassword />)
                default: break;
            }
        }
        return (
                <Card title="pantallas de login">
                    <div className="screen-buttons">
                        <Button onClick={()=>{ this.setState({screen: 1})}}>Login</Button>
                        <Button onClick={()=>{ this.setState({screen: 2})}}>Forgot Password</Button>
                        <Button onClick={()=>{ this.setState({screen: 3})}}>Email Sent</Button>
                        <Button onClick={()=>{ this.setState({screen: 4})}}>Password Changed</Button>
                        <Button onClick={()=>{ this.setState({screen: 5})}}>New Password</Button>
                    </div>

                    <div style={{"margin": "20px"}}>
                        <Grid
                            textAlign='center'
                            className='login-grid'
                            verticalAlign='middle'
                        >
                            <Grid.Column>
                                <div className="header-logo">
                                    <Image src={logo}/>
                                </div>
                                <div className="login-box">
                                    {renderBox()}
                                </div>
                            </Grid.Column>
                        </Grid>
                    </div>
                        
                </Card>
        )
    }
}
export default newComponent;
    