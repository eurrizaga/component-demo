/* loginNewPassword.js*/
import React, { Component } from 'react';
//import { Field, reduxForm } from 'redux-form';
//import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//Actions:
//......
import { 
    Button, 
    Form,
    Image,
    Input
    } from '@smartadtags/sta-components';
import key from './resources/img/key.svg';

class newComponent extends Component {
    constructor(props){ super(props); this.state = {loading: false} }
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${(touched && error) ? 'has-danger': ''}`
        return (
            <Form.Field className={className}>
                <label>{field.label}</label>
                <Input
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
    render(){
        const handleSubmit = () => {}
        return (
            <div className="forgot-password">
                <Image src={key} />
                <div className="forgot-password-title"> Forgot Password </div>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit ex massa, a ullamcorper justo sollicitudin ac. Proin tempus eget augue vitae semper.   </p>
                <div className="btn-container2">
                    <Form className="forgot-form" onSubmit={handleSubmit()}>
                        <Form.Field>
                            <Input
                                name="email"
                                type="email"
                                value="name@domain.com"
                                disabled={this.state.loading}
                                
                            />
                        </Form.Field>
                        <div className="login-btn-container">
                            <Button fluid primary className="login-btn" disabled={this.state.loading}>
                                Send email
                            </Button>
                        </div>
                            
                    </Form>
                        

                    
                </div>
            </div>
        )
    }
}
//export default connect(mapStateToProps)(loginForm);
//export default connect(mapStateToProps, { fetchPosts  })(loginForm);

export default newComponent;
// export default reduxForm({
//     validate,
//     form: 'LoginForm'
// })(
//     connect(mapStateToProps, { })(newComponent)
// );

