import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

//Material Icons
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebar">
          <SidebarRow src={user.photoURL}  title={user.displayName}/> 
          <SidebarRow Icon={LocalHospitalIcon} title="pages"/> 
          <SidebarRow Icon={PeopleIcon} title="Friends"/> 
          <SidebarRow Icon={ChatIcon} title="Messenger"/> 
          <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>   
          <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
          <SidebarRow Icon={ExpandMoreOutlinedIcon} title="More"/>
        </div>
    );
}

export default Sidebar;
