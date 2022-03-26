import {Loader} from "../../components/loader/loader.component";
import {useSelector} from "react-redux";
import {selectIsCollectionsLoaded} from "../../redux/shop-items/shop-items.selector";
import CollectionOverview from "../../components/collection-overview";

export function CollectionsOverviewPage() {
    const isLoading = !useSelector(selectIsCollectionsLoaded);

    return (
        <Loader isLoading={isLoading} component={CollectionOverview}/>
    )
}
