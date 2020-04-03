import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {Route} from "react-router-dom";
import CollectionPage from "../collection/collection-page.component";

const ShopPage = ({match}) => (
    <div className="shopPage">
        <Route exact path={`${match.path}`} component={CollectionOverview}/>
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
);


export default ShopPage;