import React ,{Component} from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component';


  class App extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //      currentuser:null
    //     }
    // }
  unsubscribeFromAuth=null;


  componentDidMount() {
      const {setCurrentUser}= this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
          if (userAuth) {
              const userRef = await createUserProfileDocument(userAuth);
              userRef.onSnapshot(snapshot => {
                  setCurrentUser({
                    
                          id: snapshot.id,
                          ...snapshot.data()
                    });
                })
            }
            else {
             setCurrentUser(userAuth);
            }    
        })
    }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  

  render(){ 
    return (
        <div>
        <Header/>
        <Switch> 
    
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
        <Route
        exact
        path='/signin'
         render={()=>
          this.props.currentUser ?
          (<Redirect to='/'/>)
          :
          (<SignInAndSignUpPage/>)}  />
        </Switch>
      </div>
   
    );
  }
}

const mapStateToProps=(state)=>({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps=(dispatch)=>({
    setCurrentUser: user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
