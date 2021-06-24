import React from 'react'
import './Data.css'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SyncIcon from '@material-ui/icons/Sync';
import { Avatar } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import {Link} from "react-router-dom"


import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Table3 from "./Table3"
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
function Data2() {
    return (
        <div className='data'>
            <div className="data_header">
                <HelpOutlineIcon fontSize='small'/>
                <a></a>
                <NotificationsNoneIcon fontSize='small'/>
            <p>Kishore</p>

                <Avatar fontSize='small'/>
            </div>
            <div className="data_info">
                <RssFeedIcon fontSize='small'/>
                <p>Permission |</p>
                <ViewModuleIcon fontSize='small'/>
                <p>Approval Matrix</p>
                <a />
                <SyncIcon fontSize='small'/>
                <h6>Last synced 15 mins ago</h6>
                
            </div>

            <div className="data_options">
            <IconButton>
            <Link to="/accesscontrol">
            <KeyboardBackspaceIcon color="primary"/>
            </Link>
            </IconButton>
            <p>Management Task</p>
            <a />
            <CreateOutlinedIcon fontSize='small' />
            </div>
            <div className="data_bread">
            
                <p>AccessControl |</p>
                
                <p>Assigned Member</p>
            </div>
            <div className="tables">
              <Table3 />

            </div>
            
            

            
        </div>
    )
}

export default Data2;
