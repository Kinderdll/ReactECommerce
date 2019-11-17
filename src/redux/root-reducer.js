import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
//import actuall local storage from window broswer or load session storage
import storage from 'redux-persist/lib/storage';

import useReducer from './user/userReducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


const persistConfig={
    key:'root',
    storage:storage,
    //array of reducers we want to store in order to persist
    whitelist:['cart']
}


const rootReducer =combineReducers({
    user:useReducer,
    cart:cartReducer,
    directory:directoryReducer,
    shop:shopReducer
})

export default persistReducer(persistConfig,rootReducer);