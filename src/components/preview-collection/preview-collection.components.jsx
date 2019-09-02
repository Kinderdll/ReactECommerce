import React from 'react'

import './preview-collection.components.scss';
import CollectionItem from '../collection-item/collection-item.components';

const PreviewCollection=({title, items})=>(
    <div className='preview-collection'>
        <h1 className='Title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                .filter((item,index)=>index< 4)
                .map( ({id , ...otherItemProps})=>(
                    <CollectionItem key={id} {...otherItemProps}/>
                ))
            }
        </div>
    </div>
)
export default PreviewCollection;