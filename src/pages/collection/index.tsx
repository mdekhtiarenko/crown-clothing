import {selectIsCollectionsLoaded} from "../../redux/shop-items/shop-items.selector";
import {useSelector} from "react-redux";
import {Loader} from "../../components/loader/loader.component";
import CollectionPage from "./collection-page.component";

export default function CollectionPageContainer() {
    const isLoading = !useSelector(selectIsCollectionsLoaded);
    return <Loader isLoading={isLoading} component={CollectionPage}/>
}
