/* loginNewPassword.js*/
import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
//import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { 
    Button, 
    Form,
    Input
    } from '@smartadtags/sta-components';
//Actions:
//......

class newComponent extends Component {
    constructor(props){ super(props); this.state = {loading: false} }
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${(touched && error) ? 'has-danger': ''}`
        return (
            <Form.Field className={className}>
                <label>{field.label}</label>
                <input
                    type={field.type}
                    disabled={field.disabled}
                    value={field.input.value} 
                    className="form-control"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error: ''}
                </div>
                
            </Form.Field>
        );
    }
    onSubmit(values){
        this.setState({loading: true});
        this.props.login(values.email, values.password, (response) => {
            this.setState({loading: false});
            this.props.setActiveUser(response);
            this.props.history.push('/');
        }, (error) =>{
            console.log(error);
            this.setState({loading: false});
        });
    }
    render(){
        return (
                <div className="new-password">
                    <div className="sign-in"> Enter your new password </div>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit ex massa, a ullamcorper justo sollicitudin ac. Proin tempus eget augue vitae semper.  </p>
                    <Form className="new-password-form"> 
                        <div>
                            <div>New Password</div>
                            <Input
                                placeholder="password"
                                type="password"
                                
                            />
                            <div>Repeat new password</div>
                            <Input
                                placeholder="password"
                                type="password"
                            />
                        </div>
                        <div className="login-btn-container">
                            <Button type="primary" fluid disabled={this.state.loading}>
                                Change
                            </Button>
                        </div>
                    </Form>
                </div>
                    
            
        )
    }
}
export default newComponent;
