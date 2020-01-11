import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import {CollectionPreviewContainer,PreviewContainer,TitleLink} from './collection-preview.styles';

const CollectionPreview=({title,items,...otherProps})=>(
    <CollectionPreviewContainer>
        <TitleLink to={`${otherProps.path}/${title.toLowerCase()}`}>{title.toUpperCase()}</TitleLink>
        <PreviewContainer>
            {
                items.filter((item,index)=>index<4).map((item)=>(
                        <CollectionItem key={item.id} item={item} />
                    )
                )
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
)

export default CollectionPreview;