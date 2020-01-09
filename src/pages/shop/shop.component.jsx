import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../../pages/collection/collection.component';

import {UpdateCollection} from '../../redux/shop/shop.actions';

class ShopPage extends React.Component{
    unsubscribeFromSnapshot=null;

    componentDidMount(){
        const {UpdateCollection} =this.props;
        const collectionRef=firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot=>{
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            UpdateCollection(collectionsMap);
        })
    }
    
    render(){
        const {match}=this.props;
        return(
            <div className='shop-page' >
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    UpdateCollection:collection=>dispatch(UpdateCollection(collection))
})

export default connect(null,mapDispatchToProps)(ShopPage);