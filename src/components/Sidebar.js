import React from "react";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import logo from "./Subtract.jpg"
import mysite from "../mYSITE.png"
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SecurityIcon from '@material-ui/icons/Security';



function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
      <Image className="logo"src={logo} />
      <Image className="mysite"src={mysite} />

        
      </div>
      
        <div className="sidebar_chats">
          
            <Link to="/projects" style={{ textDecoration: 'none' }} >
              
              <SidebarChat name="Projects" icon={<DashboardIcon />}>
                
              </SidebarChat>
            </Link>
          

          <Link to="/manage" style={{ textDecoration: 'none' }}>
            <SidebarChat name="Management" icon={<BusinessCenterIcon/>} />
          </Link>
          <Link to="/accesscontrol" style={{ textDecoration: 'none' }}>
            <SidebarChat name="Access Control" icon={<SecurityIcon/>} />
          </Link>
          
        </div>
      </div>
    
  );
}

export default Sidebar;


