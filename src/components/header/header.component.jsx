import React  from 'react'
import {Link} from 'react-router-dom';
import './header.component.scss';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';



const Header=({currentUser,hidden})=>(
    <div className='header'>
        <Link className="logo-container" to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/contact'>CONTACT</Link>
            {currentUser ?
                (
                <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                )
                 :
                (
                <Link className='option' to='/signin'>SIGN IN</Link>
                )
            }
            <CartIcon/>
        </div>
        {hidden? null:
        <CartDropdown/>
        }
    </div>
);

//state here refers to rootReducer
const mapStatetoProps= (state)=>({
    currentUser :selectCurrentUser(state),
    hidden:selectCartHidden(state)
})

export default connect(mapStatetoProps,)(Header);