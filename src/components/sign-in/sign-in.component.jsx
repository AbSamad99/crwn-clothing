import React,{useState} from 'react';
import {connect} from 'react-redux';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {googleSignInStart,emailSignInStart} from '../../redux/user/user.actions';

const SignIn=({emailSignInStart,googleSignInStart})=>{

    const [userCredentials,setCredentials]=useState({email:'',password:''})
    
    const onChange=(event)=>{
        const {value,name}=event.target;
        setCredentials({...userCredentials,[name]:value});
    }
    
    const {email,password}=userCredentials; 

    const handleSubmit=async (event)=>{
        event.preventDefault();
        emailSignInStart(email,password);        
    }
    
    return(
        <div className='sign-in' >
            <h1 className='title' >I already have an account</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput
                 type='email' 
                 name='email' 
                 value={email} 
                 required
                 label='Email' 
                 handleChange={onChange}          
                 />
                <FormInput 
                type='password' 
                name='password' 
                value={password} 
                required 
                label='Password'
                handleChange={onChange}
                />
                <div className='buttons' >
                <CustomButton type='submit' >sign in</CustomButton>
                <CustomButton type='button' isGoogleSignIn onClick={googleSignInStart} >sign in with google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);