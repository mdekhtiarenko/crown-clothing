import React from "react";
import "./collection-page.styles.scss";
import {createStructuredSelector} from "reselect";
import {selectCollection} from "../../redux/shop-items/shop-items.selector";
import {connect} from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({collection}) => {
    console.log(collection);
    const {title, items} = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
};


const mapStateToProps = (state, ownProps) => createStructuredSelector({
    collection: selectCollection(ownProps.match.params.collectionId)
});

export default connect(mapStateToProps)(CollectionPage);
