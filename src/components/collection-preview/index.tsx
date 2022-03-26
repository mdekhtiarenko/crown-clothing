import React from 'react';
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item";
import {Collection} from "../../redux/shop-items/shop-items.types";

interface IProps {
    collection: Collection
}

export default function CollectionPreview({collection}: IProps) {
    return (
        <div className="collection-preview">
            <h1 className="title">{collection.title.toUpperCase()}</h1>
            <div className="preview">
                {
                    collection.items.slice(0, 4).map((item) => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
}
