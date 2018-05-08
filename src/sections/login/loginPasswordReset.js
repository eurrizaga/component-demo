/* loginNewPassword.js*/
import React, { Component } from 'react';
//
//import { Field, reduxForm } from 'redux-form';
//import { Link } from 'react-router-dom';
//import { connect } from 'react-redux';
//Actions:
//......
import { 
    Button, 
    Form,
    Image
    } from '@smartadtags/sta-components';
import successImg from './resources/img/group.svg';

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
            <div className="password-reset">
                <Image src={successImg} />

                <div className="congratulations-title"> Congratulations! </div>
                <p> Your password has been changed succesfully.  </p>
                <div className="btn-container">
                    <Button fluid primary className="login-btn" disabled={this.state.loading}>
                        Go to dashboard
                    </Button>
                </div>
            </div>
        )
    }
}
// function validate(values){
//     const errors = {};
//     if (!values.email || values.email.length < 3) {
//         errors.email = "Enter a valid email!";
//     }
//     if (!values.password || values.password.length < 3) {
//         errors.password = "Enter a valid password!";
//     }
//     return errors;
// }

// function mapStateToProps(state){
//     return { activeUser: state.activeUser }
// }


//export default connect(mapStateToProps)(loginForm);
//export default connect(mapStateToProps, { fetchPosts  })(loginForm);

export default newComponent;
// export default reduxForm({
//     validate,
//     form: 'LoginForm'
// })(
//     connect(mapStateToProps, { })(newComponent)
// );

    