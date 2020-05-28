import {createStructuredSelector} from "reselect";
import {selectIsShopItemsFetching} from "../../redux/shop-items/shop-items.selector";
import CollectionOverview from "./collection-overview.component";
import {compose} from "redux";
import {connect} from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsShopItemsFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
