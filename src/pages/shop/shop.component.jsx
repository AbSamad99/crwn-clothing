import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../../pages/collection/collection.component';

import {UpdateCollection} from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner=WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner=WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    state={
        loading:true
    }

    unsubscribeFromSnapshot=null;

    componentDidMount(){
        const {UpdateCollection} =this.props;
        const collectionRef=firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot=>{
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            UpdateCollection(collectionsMap);
            this.setState({loading:false})
        })
    }
    
    render(){
        const {match}=this.props;
        const {loading}=this.state;
        return(
            <div className='shop-page' >
                <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner {...props} isLoading={loading} />} />
                <Route path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner {...props} isLoading={loading} />} />
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    UpdateCollection:collection=>dispatch(UpdateCollection(collection))
})

export default connect(null,mapDispatchToProps)(ShopPage);