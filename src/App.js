import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './sidebar';
import Chat from './chat';
import Pusher from 'pusher-js';
import Axios from './axios';


function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {

   Axios.get('/messages/sync')
   .then(response => {
     setMessages(response.data)
   });


  },[]);

  useEffect(() => {


    const pusher = new Pusher('258b68037586d0a1bcda', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessages([...messages, data
      ]);
    });//once
   return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages)
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages }/>
        </div> 
      
        
        
        
        
          
        
      
    </div>
  );
}

export default App;
