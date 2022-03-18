export enum ShopItemsTypes {
    FETCH_SHOP_ITEMS_START_CALL = "FETCH_SHOP_ITEMS_START_CALL",
    FETCH_SHOP_ITEMS_SUCCESS_CALL = "FETCH_SHOP_ITEMS_SUCCESS_CALL",
    FETCH_SHOP_ITEMS_FAILURE_CALL = "FETCH_SHOP_ITEMS_FAILURE_CALL",
}

export interface ShopItemsAction {
    type: ShopItemsTypes,
    collections?: Collection[]
    errorMessage?: string
}

export interface Item {
    imageUrl: string;
    price: number;
    id: number;
    name: string;
}

export interface Collection {
    id: string;
    routeName: string;
    title: string;
    items: Item[];
}

export interface ShopItems {
    collections?: Collection[];
    isFetching: boolean;
    errorMessage?: string;
}
