import React from 'react';
import {connect} from 'react-redux';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    onChange=(event)=>{
        const {value,name}=event.target;
        this.setState({[name]:value});
    }

    handleSubmit=async (event)=>{
        event.preventDefault();
        const {email,password}=this.state;
        const {emailSignInStart}=this.props;
        emailSignInStart(email,password);        
    }

    render(){
        const {googleSignInStart}=this.props;
        return(
            <div className='sign-in' >
                <h1 className='title' >I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >
                    <FormInput
                     type='email' 
                     name='email' 
                     value={this.state.email} 
                     required
                     label='Email' 
                     handleChange={this.onChange}          
                     />
                    <FormInput 
                    type='password' 
                    name='password' 
                    value={this.state.password} 
                    required 
                    label='Password'
                    handleChange={this.onChange}
                    />
                    <div className='buttons' >
                    <CustomButton type='submit' >sign in</CustomButton>
                    <CustomButton type='button' isGoogleSignIn onClick={googleSignInStart} >sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);