import React ,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase.utils';




  class App extends Component{
    constructor(props){
        super(props);
        this.state={
         currentuser:null
        }
    }
  unsubscribeFromAuth=null;


  componentDidMount() {
   this.unsubscribe= auth.onAuthStateChanged(user=>{
      this.setState({currentuser:user})
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  

  render(){
    return (
        <div>
        <Header currentuser={this.state.currentuser} />
        <Switch> 
    
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
   
    );
  }
}

export default App;
