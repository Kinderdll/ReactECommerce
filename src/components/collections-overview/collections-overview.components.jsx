import React from 'react';
import {connect} from 'react-redux';
import './collections-overview.styles.scss'
import { createStructuredSelector } from 'reselect';
import PreviewCollection from '../preview-collection/preview-collection.components';
import { selectCollections } from '../../redux/shop/shop.selectors.js';


const CollectionsOverview=({collections})=>(
    <div className='collections-overview'>
        {   collections.map(({id ,...otherprops }) =>(
         <PreviewCollection key={id}{...otherprops}/>
        )) }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
