import React from 'react';

import './sign-up.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    onChange=(event)=>{
        const {value,name}=event.target;
        this.setState({[name]:value});
    }

    handleSubmit=async (event)=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password !== confirmPassword){
            alert("passwords don't match");
            return;
        }

        try {
            const {user}= await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        } catch (error) {
            
        }
    }

    render(){
        return(
            <div className='sign-up' >
                <h1 className='title' >I do not have an account</h1>
                <span> Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit} >
                    <FormInput
                      type='text'
                      value={this.state.displayName}
                      name='displayName'
                      required
                      label='Display Name'
                      handleChange={this.onChange}
                      />
                    <FormInput
                      type='email'
                      value={this.state.email}
                      name='email'
                      required
                      label='Email'
                      handleChange={this.onChange}
                    />
                    <FormInput
                      type='password'
                      value={this.state.password}
                      name='password'
                      required
                      label='Password'
                      handleChange={this.onChange}
                    />
                    <FormInput
                      type='password'
                      value={this.state.confirmPassword}
                      name='confirmPassword'
                      required
                      label='Confirm Password'
                      handleChange={this.onChange}
                    />
                    <CustomButton type='submit' >SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;