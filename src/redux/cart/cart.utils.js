export const addItemToCart = ( itemToAdd, cartItems) => {
    const existingItem = cartItems.find(i => i.id === itemToAdd.id);

    if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
        return [...cartItems];
    }
    return [...cartItems, {...itemToAdd, quantity: 1}];
};