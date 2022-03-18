import React from "react";
import "./collection-page.styles.scss";
import {selectCollection} from "../../redux/shop-items/shop-items.selector";
import {useSelector} from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {useParams} from "react-router-dom";

const CollectionPage = () => {
    const {collectionId} = useParams();
    const collection = useSelector(selectCollection(collectionId))
    return (
        <div className="collection-page">
            <h2 className="title">{collection.title}</h2>
            <div className="items">
                {
                    collection.items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
};

export default CollectionPage;
