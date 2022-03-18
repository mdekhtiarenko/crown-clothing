import React from "react";
import "./collection-overview.styles.scss";
import {selectShopCollections} from "../../redux/shop-items/shop-items.selector";
import {useSelector} from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = () => {
    const collections = useSelector(selectShopCollections);
    return (

        <div>
            {
                collections.map(({id, ...collectionProps}) =>
                    <CollectionPreview key={id} {...collectionProps}/>
                )
            }
        </div>
    )
};

export default CollectionOverview;
