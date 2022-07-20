import SearchOutlined from '@mui/icons-material/SearchOutlined'
import { Avatar, IconButton } from '@mui/material'
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import React from 'react'
import './Chat.css'
import MoreVert from '@mui/icons-material/MoreVert';
import SentimentSatisfiedSharpIcon from '@mui/icons-material/SentimentSatisfiedSharp';
import MicRoundedIcon from '@mui/icons-material/MicRounded';

function Chat() {
  return (
    <div className='chat'>
      <div className="chat_header">
        <Avatar src='https://avatars.githubusercontent.com/u/98271764?v=4' />

        <div className="chat_headerInfo">
          <h3>Room name</h3>
          <p>last seen at....</p>
        </div>
        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachmentOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className='chat_message'>
          <span className="chat_name">
            Manish
          </span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className='chat_reciever chat_message'>
          <span className="chat_name">
            Manish
          </span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat_footer">
        <SentimentSatisfiedSharpIcon />
        <form>
          <input type="text" placeholder='Type a message...' />
          <button onClick="" type='submit'>Send a message</button>
        </form>
        <MicRoundedIcon />
      </div>
    </div>
  )
}

export default Chat