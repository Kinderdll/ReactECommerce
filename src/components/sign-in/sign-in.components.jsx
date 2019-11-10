import React, { Component } from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
 


class SignIn extends Component{
     constructor(props){
         super(props);
         this.state={
             email:'',
             password:''
         }
     }

     handleSubmit=async (event)=>{
         event.preventDefault();
         
         const { email, password } = this.state;

         try {
             await auth.signInWithEmailAndPassword(email, password);
             this.setState({ email: '', password: '' })
         }
         catch (err) {
             console.log(err);
         }


         
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

                     <FormInput
                         name='email'
                         type='email'
                         value={this.state.email}
                         label='Email'
                         handleChange={this.handleChange}
                      required />
                    
                
                     <FormInput
                         name='password'
                         type='password'
                         value={this.state.password}
                         label='Password'
                         handleChange={this.handleChange}
                         required />
                   
                    <div className='buttons'>
                         <CustomButton type='Submit' onClick={this.handleSubmit} value='Submit form'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>




             </div>
         )
     }
 }

 export default SignIn;