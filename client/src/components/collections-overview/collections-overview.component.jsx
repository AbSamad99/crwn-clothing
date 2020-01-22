import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import {CollectionsOverviewContainer} from './collections-overview.styles'

const CollectionsOverview=({collections,...otherProps})=>(
    <CollectionsOverviewContainer>
        {
                collections.map(({id, ...otherCollectionProps})=>(
                        <CollectionPreview  path={otherProps.match.path} key={id} {...otherCollectionProps} />
                    )
                )
            }
    </CollectionsOverviewContainer>
);

const mapStateToProps=createStructuredSelector({
    collections:selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);