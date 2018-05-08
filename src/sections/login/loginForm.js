import React, { Component } from 'react';
// import { Field, reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
import { 
    Button, 
    Form,
    Grid,
    Input
    } from '@smartadtags/sta-components';

//import { login, setActiveUser } from '../../../actions';
//Actions:
//......
class loginForm extends Component {
    constructor(props){ super(props); this.state = {loading: false} }
    componentWillMount(){
        if (this.props.activeUser && this.props.activeUser.id){
            this.props.history.push('/');
        }
    }
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${(touched && error) ? 'has-danger': ''}`
        return (
            <Input
                type={field.type}
                disabled={field.disabled}
                value={field.input.value} 
                className="form-control"
                {...field.input}
            />
        );
    }
    onSubmit(values){
        // this.setState({loading: true});
        // this.props.login(values.email, values.password, (response) => {
        //     this.setState({loading: false});
        //     this.props.setActiveUser(response);
        //     this.props.history.push('/');
        // }, (error) =>{
        //     console.log(error);
        //     this.setState({loading: false});
        // });
    }
    render(){
        return (
            <Form className="login-form">
                <div className="sign-in">Sign in</div>
                <Input
                    placeholder="email"
                    type="email"
                />
                <Input
                    placeholder="password"
                    type="password"
                />
                <div className="login-btn-container">
                    <Button fluid type="primary" className="login-btn" disabled={this.state.loading}>
                        Continue
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9">
                            <g fill="none" fillRule="evenodd" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 4.5h12M8.5 0L13 4.5 8.5 9"/>
                            </g>
                        </svg>
                    </Button>
                </div>
                <div className="ui horizontal divider divider-custom"> or continue with </div>
                <div className="login-btn-container">
                    <Button type="facebook" className="alter-login">
                        Facebook
                    </Button>
                    <Button type="google" className="alter-login">
                        Google
                    </Button>
                </div>
                
                <div className="login-footer">
                    <div>Forgot password?</div>
                    <div>Don't have an account yet? <a href="" >Sign up</a></div>
                </div>
                
            </Form>
            
        )
    }
}

// function validate(values){
//     const errors = {};
//     if (!values.email || values.email.length < 3) {
//         errors.email = "Enter a valid email!";
//     }
//     if (!values.password || values.password.length < 3) {
//         errors.password = "Enter a valid category!";
//     }
//     return errors;
// }

// function mapStateToProps(state){
//     return { activeUser: state.activeUser }
// }


//export default connect(mapStateToProps)(loginForm);
//export default connect(mapStateToProps, { fetchPosts  })(loginForm);

export default loginForm;
// export default reduxForm({
//     validate,
//     form: 'LoginForm'
// })(
//     connect(mapStateToProps, { login, setActiveUser })(loginForm)
// );
//export default loginForm;
