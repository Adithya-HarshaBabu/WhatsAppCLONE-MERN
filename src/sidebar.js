import React from 'react'
import './sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined} from '@material-ui/icons';
import SidebarChat from './sidebarChat';

function sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
               
             <Avatar src="https://res.cloudinary.com/campus-job/image/upload/t_student-public-page/v1/profile_pictures/z8gC5m9tE9_20191222.jpg" />
               
                <div className="sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                    

                </div>
            </div>
            <div className="sidebar__search">
                <div className= "sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or Start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
    
        </div>
    )
}

export default sidebar
