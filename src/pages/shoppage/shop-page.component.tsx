import React, {useEffect} from "react";
import {fetchShopItemsStart} from "../../redux/shop-items/shop-items.actions";
import {useDispatch} from "react-redux";
import {Outlet} from "react-router-dom";


export default function ShopPage() {
    const dispatch = useDispatch();
    console.log("Loading shop page")

    useEffect(() => {
        console.log("useEffect")
        dispatch(fetchShopItemsStart());
    }, [dispatch])


    return (
        <div className="shopPage">
            <Outlet/>
        </div>
    )

}


