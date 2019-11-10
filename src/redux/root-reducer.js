import {combineReducers} from 'redux';

import useReducer from './user/userReducer';
import cartReducer from './cart/cart.reducer';


export default combineReducers({
    user:useReducer,
    cart:cartReducer
})