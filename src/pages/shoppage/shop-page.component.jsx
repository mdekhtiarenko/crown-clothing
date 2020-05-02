import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {Route} from "react-router-dom";
import CollectionPage from "../collection/collection-page.component";
import {firestore} from "../../firebase/firebase.utils";
import {initShopItems} from "../../redux/shop-items/shop-items.actions";
import {connect} from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        isLoading: true
    };

    componentDidMount() {
        const {initializeShopItems} = this.props;
        const collectionsRef = firestore.collection("collections");

        collectionsRef.get().then(collectionsSnapshot => {
            initializeShopItems(this.convertCollectionsToMap(collectionsSnapshot));
            this.setState({isLoading: false});
        });

        // collectionsRef.onSnapshot(async collectionsSnapshot => {
        //     initializeShopItems(this.convertCollectionsToMap(collectionsSnapshot));
        //     this.setState({isLoading: false});
        // });
    }

    render() {
        const {match} = this.props;
        const {isLoading} = this.state;
        return (
            <div className="shopPage">
                <Route exact path={`${match.path}`}
                       render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props}/>}/>
                <Route exact path={`${match.path}/:collectionId`}
                       render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props}/>}/>
            </div>
        )
    }

    convertCollectionsToMap(collectionSnapshot) {
        const collection = collectionSnapshot.docs.map(docSnapshot => {
            const {title, items} = docSnapshot.data();
            return {
                id: docSnapshot.id,
                routeName: encodeURI(title.toLowerCase()),
                title,
                items
            }
        });

        return collection.reduce((accumulator, collection) => {
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator;
        }, {});
    }

}

const mapDispatchToProps = dispatch => ({
    initializeShopItems: shopItems => dispatch(initShopItems(shopItems))
});

export default connect(null, mapDispatchToProps)(ShopPage);
