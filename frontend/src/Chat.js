import { Avatar, IconButton} from '@mui/material'
import React from 'react'
import "./Chat.css"
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from "./Axios";
import { useState } from 'react';

function Chat({ messages }) {

  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    axios.post('/messages/new', {
      "message": input,
      "name": "Liban Jama",
      "timeStamp": "Just Now",
      "received": true
    })
  };
  return (
    <div className = "chat">
      <div className = "chat_header">
        <Avatar/>

        <div className = "chat_headerinfo">
          <h3> Erik Jackson </h3>
          <p> Last Seen Today at 12:43 pm </p> 
        </div>

        <div className = "chat_headerRight">
        <IconButton>
          <SearchIcon/>
        </IconButton>
        <IconButton>
          <AttachFileIcon/>
        </IconButton>
        <IconButton>
          <MoreVertIcon/>
        </IconButton>
        </div>
      </div>

      <div className = "chat_body">
        {messages.map((message) => (
           <p className = {`chat_message ${message.received &&"chat_receiver"}`}>
           
           <span className = "chat_name">{message.name}</span>
           {message.message}
           <span className = "chat_time">
             {message.timeStamp}
           </span>
         </p>

        ))}
        </div>
        <div className = "chat_footer"> 
          <InsertEmoticonIcon/>
          <form>
            <input value={input} onChange = {e => setInput(e.target.value)} placeholder = "Type a message" type = "text" />
            <button onClick = {sendMessage}type = "submit"> Send a message</button>
          </form>
          <MicIcon/>
          </div>
    </div>
  )
}

export default Chat