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