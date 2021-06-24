import React from 'react';
import './SidebarChat.css';



function SidebarChat(props) {
    return (

    <div className="sidebarChat">
        
        <div className="sidebarChat__info">

            <p>{props.icon} {props.name}</p>
            
        </div>
        </div>
    );
}

export default SidebarChat;