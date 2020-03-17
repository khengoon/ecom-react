export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCart = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCart) {
        // return a new cartItems Object
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem 
        )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
        
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if (existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== existingCartItem.id)
    }

    return cartItems.map(cartItem => 
        cartItem.id === existingCartItem.id 
        ? {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem
    );
};