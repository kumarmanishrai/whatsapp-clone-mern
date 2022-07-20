import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'

function SidebarChat() {
  return (
    <div className='sidebarChat'>
        <Avatar src='https://avatars.githubusercontent.com/u/98271764?v=4' />
        <div className="sidebarChat_info">
            <h2>Room Name</h2>
            <p>This is the last message</p>
        </div>
    </div>
  )
}

export default SidebarChat