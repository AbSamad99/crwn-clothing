import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

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

    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }

    render(){
        return(
            <div className='sign-in' >
                <h2 className='title' >SIGN IN</h2>
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
                    <CustomButton type='submit' >sign in</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;