import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss';

/* we use class component because we need to store the state value of the menu items that we will pass and create menu items with */

const Directory = ({sections}) =>  ( 

  <div className = 'directory-menu'> 
   {sections.map(({id, ...otherSectionProps }) =>(    /*otherSectionProps passes the keys title,image,size,link  */
      <MenuItem key = {id } {...otherSectionProps} />
      ))}
        </div>
  );

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
}) 

export default connect(mapStateToProps)(Directory);