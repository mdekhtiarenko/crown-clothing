import React from "react";
import {Route} from "react-router-dom";
import {fetchShopItemsStart} from "../../redux/shop-items/shop-items.actions";
import {connect} from "react-redux";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection-page.container";


class ShopPage extends React.Component {
    componentDidMount() {
        const {fetchShopItemsStart} = this.props;
        fetchShopItemsStart();
    }

    render() {
        const {match} = this.props;
        return (
            <div className="shopPage">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer}/>
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchShopItemsStart: () => dispatch(fetchShopItemsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
