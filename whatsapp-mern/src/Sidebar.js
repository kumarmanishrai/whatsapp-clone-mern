import React from 'react'
import "./Sidebar.css"
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar_header">
            <Avatar src='https://avatars.githubusercontent.com/u/98271764?v=4' />
            <div className="sidebar_headerRight">
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
        <div className="sidebar_search">
            <div className="sidebar_searchContainer">

                <SearchOutlinedIcon />
                <input type="text" placeholder='Search' />
            </div>
        </div>
        <div className="sidebar_chats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar 