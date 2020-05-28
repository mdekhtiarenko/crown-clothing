import React from "react";
import {Route} from "react-router-dom";
import {fetchShopItemsStartAsync} from "../../redux/shop-items/shop-items.actions";
import {connect} from "react-redux";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection-page.container";


class ShopPage extends React.Component {
    componentDidMount() {
        const {fetchShopItemsStartAsync} = this.props;
        fetchShopItemsStartAsync();
    }

    render() {
        const {match} = this.props;
        return (
            <div className="shopPage">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchShopItemsStartAsync: () => dispatch(fetchShopItemsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
