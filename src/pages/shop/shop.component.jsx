import React from 'react'
import CollectionsOverviewComponents from '../../components/collections-overview/collections-overview.components'
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.componets'




const ShopPage =({match})=>(
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewComponents}/>
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
)


export default ShopPage;