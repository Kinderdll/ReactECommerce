import React, { Component } from 'react'
import SHOP_DATA from './shop.data.jsx';
import PreviewCollection from '../../components/preview-collection/preview-collection.components.jsx';

class ShopPage extends Component{
    constructor(props){
        super();
        this.state={
            collections:SHOP_DATA
        }
    }
    render(){
        const {collections}=this.state;
        return(
            <div className='shop-page'>
           {   collections.map(({id ,...otherprops }) =>(
               <PreviewCollection key={id}{...otherprops}/>
           )) }
            </div>
        )
    }
}
export default ShopPage;