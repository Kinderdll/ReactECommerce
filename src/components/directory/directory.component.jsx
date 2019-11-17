import React from 'react'
import MenuItem from '../menu-item/menu-item.component.jsx'
import './directory.styles.scss';
import {connect} from 'react-redux';
import { selectDirectorySection } from './directory.selector.js';
import {createStructuredSelector} from 'reselect';

const Directory =({sections})=> {
  return (
 
            <div className='directory-menu'>
                {sections.map(({id , ...otherprops})=>(
                 // <MenuItem key={id}  title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
                     <MenuItem key={id} {...otherprops} />
                ))}
            </div>
  )
}

const mapStateToProps=createStructuredSelector({
  sections:selectDirectorySection
})

export  default connect(mapStateToProps)(Directory);