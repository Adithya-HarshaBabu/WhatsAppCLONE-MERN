
import './chat.css'
import { Avatar, IconButton } from '@material-ui/core'
import { MoreVert, SearchOutlined, AttachFile} from '@material-ui/icons'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from './axios'
import React, { useState} from "react"; 

function Chat({messages}) {
    
    const  [input, setInput]=   useState("");
    const sendMessage =async  (e) => {
        e.preventDefault();
    await axios.post('/messages/new', {
            "message": input,
    "name": "Adithya",
    "timestamp": "now ",
    "received":true

        });
        setInput("");
    };
    return (
        <div className="chat">
            
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>
                        Room Name
                    </h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                        <IconButton>
                            <AttachFile />
                            </IconButton>
                            <IconButton>
                                <MoreVert /> 
                                </IconButton>
                                                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((message) => (

<p className= 'chat__message ${message.received && "chat__receiver"'>
<span className="chat__name">
  {message.name}  
</span>
{message.message}
<span className="chat__timeStamp">
    
    {message.timestamp}
    
    
</span>
</p>
                ))}
              
                    <p className="chat__message chat__receiver">
                    <span className="chat__name">
                      Adi  
                    </span>
                    This is a message
                    <span className="chat__timeStamp">
                        {new Date().toUTCString()
                        
                        
                        }
                    </span>
                    </p>
                    <p className="chat__message">
                    <span className="chat__name">
                      Adi  
                    </span>
                    This is a message
                    <span className="chat__timeStamp">
                        {new Date().toUTCString()
                        
                        
                        }
                    </span>
                    </p>
            </div>
                
       <div className="chat__footer">
           <InsertEmoticonIcon />
           <form>
               <input value={input} 
               onChange = {(e) => setInput(e.target.value)}
               placeholder="Type a message" type="text" />
    
           
           <button onClick= {sendMessage}type="submit">Send a message</button>
           </form>
           <MicIcon />
       </div>
        </div>

    )
}

export default Chat
