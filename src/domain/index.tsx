export interface Item {
    id: number,
    name: string,
    imageUrl: string,
    price: number
}

export interface CartItem extends Item {
    quantity: number
}
