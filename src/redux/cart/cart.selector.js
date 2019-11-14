import {createSelector} from 'reselect';


//input selector, that returns a piece of state
const selectCart = state => state.cart;
//const selectUser = state => state.user;


//takes 2 args 1.an array of all iput selectors 2. a function that would return the value that we want
export const selectCartItems  = createSelector(
    [selectCart],
    cart=>cart.cartItems
);


//we always use the more specific selector, restricting input
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems =>cartItems.reduce((accumulatorQuantity,cartItem)=>accumulatorQuantity+cartItem.quantity,0))
)
