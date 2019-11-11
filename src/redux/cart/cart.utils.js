export const addItemToCart=( currentCartItems,cartItemToAdd)=>{
    const currentItemsInCart = 
    currentCartItems.find(currentCartItem=> 
        currentCartItem.id === cartItemToAdd.id
        )

        //returns true if match , that means cartItemtoAdd is already there

    if (currentItemsInCart){
      return currentCartItems.map(existing_cartItem =>
        //return new array
            existing_cartItem.id === cartItemToAdd.id ?
            {...existing_cartItem, quantity:existing_cartItem.quantity + 1}
            :
            {existing_cartItem}
        )
    }

    return [...currentCartItems,{...cartItemToAdd,quantity:1}]
}