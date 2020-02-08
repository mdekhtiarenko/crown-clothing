export const addItemToCart = (itemToAdd, cartItems) => {
    const existingItem = cartItems.find(i => i.id === itemToAdd.id);

    if (existingItem) {
        return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }
    return [...cartItems, {...itemToAdd, quantity: 1}];
};

export const decreaseItemCount = (itemToDecrease, cartItems) => {
    const restOfCart = cartItems.filter(i => i.id !== itemToDecrease.id);
    if (itemToDecrease.quantity === 1) {
        return restOfCart;
    } else {
        return [...restOfCart, {...itemToDecrease, quantity: itemToDecrease.quantity - 1}]
    }
};