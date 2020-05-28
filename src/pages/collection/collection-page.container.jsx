import {selectIsShopItemsLoaded} from "../../redux/shop-items/shop-items.selector";
import {createStructuredSelector} from "reselect";
import CollectionPage from "./collection-page.component";
import {compose} from "redux";
import {connect} from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsShopItemsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
