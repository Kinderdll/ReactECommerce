import React, { Component } from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
 class SignIn extends Component{
     constructor(props){
         super(props);
         this.state={
             email:'',
             password:''
         }
     }

     handleSubmit=(event)=>{
         event.defaultPrevented();
         this.setState({emai:'', password:''})
     }

     //function οπου με το που γινεται fire το event παιρνει το name του input σαν key και το value του input [key]:value
     handleChange=(event)=>{
         const {name, value}=event.target;
         this.setState({
                [name]:value
         })
         console.log(name,value)
     }


     render(){
         return(
             <div className='sign-in'>
                <h2>I already have ana account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput name='email' type='email' value={this.state.email} label='Email' handleChange={this.handleChange} required/>
                    
                
                    <FormInput name='password' type='password' value={this.state.password} label='Password' handleChange={this.handleChange} required/>
                   

                    <CustomButton type='Submit' value='Submit form'>Sign In</CustomButton>
                </form>




             </div>
         )
     }
 }

 export default SignIn;