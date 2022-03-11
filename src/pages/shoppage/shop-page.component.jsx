import React from "react";
import {fetchShopItemsStart} from "../../redux/shop-items/shop-items.actions";
import {connect} from "react-redux";
import {Outlet} from "react-router-dom";


class ShopPage extends React.Component {
    componentDidMount() {
        const {fetchShopItemsStart} = this.props;
        fetchShopItemsStart();
    }

    render() {
        return (
            <div className="shopPage">
                <Outlet/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchShopItemsStart: () => dispatch(fetchShopItemsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
