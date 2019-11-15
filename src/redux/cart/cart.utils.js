export const addItemToCart=( currentCartItems,cartItemToAdd)=>{
    const existingCartItem =  currentCartItems.find(
        currentCartItem => currentCartItem.id === cartItemToAdd.id
        )
        //returns true if match , that means cartItemtoAdd is already there
    if (existingCartItem){
      return currentCartItems.map(currentCartItem =>
        //return new array
        currentCartItem.id === cartItemToAdd.id ?
            {...currentCartItem, quantity: currentCartItem.quantity + 1}
            :
            currentCartItem
        )
    }

    return [...currentCartItems, { ...cartItemToAdd,quantity:1}]
}

export const removeItemFromCart=(currentCartItems,cartItemToRemove)=>{
  return  currentCartItems.filter(currentCartItem=>currentCartItem.id !== cartItemToRemove.id)
}


export const decreaseItem=(cartItems,cartItemToRemove)=>{
    const existingCartItem=cartItems.find(
        cartItem=>cartItem.id===cartItemToRemove.id
    )

    if(existingCartItem.quantity===1){
        return cartItems.filter(cartItem=>cartItem.id!==cartItemToRemove.id)
    }
    

    return cartItems.map(cartItem=>cartItem.id===cartItemToRemove.id?
        {
            ...cartItem,quantity:cartItem.quantity-1
        }
        :cartItem

        
        
        )


}