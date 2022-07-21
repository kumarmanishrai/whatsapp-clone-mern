import './App.css';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js'
import Sidebar from './Sidebar';
import Chat from './Chat';
import axios from './axios';

function App() {
  const[messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then(response => {
        setMessages(response.newMessage)
      })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('489dcd58e95c56e01e96', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      alert(JSON.stringify(newMessage));
      setMessages([...messages , newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])
  console.log(messages);
  
  return (
    <div className="app">
      <div className="app_body">

      <Sidebar />

      <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
