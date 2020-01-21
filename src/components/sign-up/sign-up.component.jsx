import React,{useState} from 'react';
import {connect} from 'react-redux';

import './sign-up.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component'; 

import {signUpStart} from '../../redux/user/user.actions';

const SignUp=({signUpStart})=>{
    const [userCredentials,setCredentials]=useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const onChange=(event)=>{
        const {value,name}=event.target;
        setCredentials({...userCredentials,[name]:value});
    }

    const {displayName,email,password,confirmPassword}=userCredentials;

    const handleSubmit=async (event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }
        signUpStart(displayName,email,password)
    }

    return(
        <div className='sign-up' >
            <h1 className='title' >I do not have an account</h1>
            <span> Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit} >
                <FormInput
                  type='text'
                  value={displayName}
                  name='displayName'
                  required
                  label='Display Name'
                  handleChange={onChange}
                  />
                <FormInput
                  type='email'
                  value={email}
                  name='email'
                  required
                  label='Email'
                  handleChange={onChange}
                />
                <FormInput
                  type='password'
                  value={password}
                  name='password'
                  required
                  label='Password'
                  handleChange={onChange}
                />
                <FormInput
                  type='password'
                  value={confirmPassword}
                  name='confirmPassword'
                  required
                  label='Confirm Password'
                  handleChange={onChange}
                />
                <CustomButton type='submit' >SIGN UP</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps=dispatch=>({
    signUpStart:(displayName,email,password)=>dispatch(signUpStart({displayName,email,password}))
})

export default connect(null,mapDispatchToProps)(SignUp);