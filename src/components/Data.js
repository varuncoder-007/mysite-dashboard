import React from 'react'
import './Data.css'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import SyncIcon from '@material-ui/icons/Sync';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CustomizedTables from "./CustomizedTables"
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
function Data() {
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
            <Button variant="contained" color="primary" >
            + Add Role 
            </Button>
            <a />
            <CreateOutlinedIcon fontSize='small' />
            <a />
            <DeleteOutlinedIcon fontSize='small'/>
            </div>
            <div className="tables">
            <CustomizedTables />

            </div>
            
            

            
        </div>
    )
}

export default Data
