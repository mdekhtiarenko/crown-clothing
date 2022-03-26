import React from "react";
import "./collection-overview.styles.scss";
import {selectShopCollections} from "../../redux/shop-items/shop-items.selector";
import {useSelector} from "react-redux";
import CollectionPreview from "../collection-preview";
import {Collection} from "../../redux/shop-items/shop-items.types";

export default function CollectionOverview() {
    const collections = useSelector(selectShopCollections);
    return (
        <div>
            {
                collections.map((collection: Collection) =>
                    <CollectionPreview key={collection.id} collection={collection}/>
                )
            }
        </div>
    )
}
