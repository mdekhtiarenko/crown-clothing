import React from "react";
import "./collection-overview.styles.scss";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop-items/shop-items.selector";
import {connect} from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";

const CollectionOverview = ({collections}) => {
    console.log("RENDERING!");
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

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
