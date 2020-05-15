import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {selectDirectorySections} from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';

/* we use class component because we need to store the state value of the menu items that we will pass and create menu items with */

const Directory = ({sections}) =>  ( 
  <DirectoryMenuContainer>
   {sections.map(({id, ...otherSectionProps }) =>(    /*otherSectionProps passes the keys title,image,size,link  */
      <MenuItem key = {id } {...otherSectionProps} />
      ))}
        </DirectoryMenuContainer>
  );

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);