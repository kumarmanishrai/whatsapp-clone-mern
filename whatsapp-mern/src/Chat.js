import SearchOutlined from '@mui/icons-material/SearchOutlined'
import { Avatar, IconButton } from '@mui/material'
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import React, { useState } from 'react'
import './Chat.css'
import MoreVert from '@mui/icons-material/MoreVert';
import SentimentSatisfiedSharpIcon from '@mui/icons-material/SentimentSatisfiedSharp';
import MicRoundedIcon from '@mui/icons-material/MicRounded';
import axios from './axios';

function Chat({ messages }) {

  const [input, setInput] = useState("");


  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post('/messages/new', {
      message: input,
      name: "manish",
      timestamp: "JustNow",
      recieved: true,
    })
    setInput('');
  }
   
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
        {messages.map((message) => (
        <p className={`chat_message ${message.recieved && "chat_recieved"}`}>
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      <div className="chat_footer">
        <SentimentSatisfiedSharpIcon />
        <form>
          <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message...' />
          <button onClick={sendMessage} type='submit'>Send message</button>
        </form>
        <MicRoundedIcon />
      </div>
    </div>
  )
}

export default Chat