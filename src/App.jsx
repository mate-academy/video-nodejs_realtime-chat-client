// #region imports 
import { useState } from 'react';
import './App.css'
import { MessageForm } from './MessageForm.jsx';
import { MessageList } from './MessageList.jsx';
// #endregion

import { WebSocketLoader } from './WebSocket.jsx';

const DataLoader = WebSocketLoader;

export function App() {
  const [messages, setMessages] = useState([]);

  function saveData(message) {
    setMessages(current => [message, ...current]);
  }

  return (
    <section className="section content">
      <DataLoader onData={saveData} />

      <MessageForm />
      <MessageList messages={messages} />
    </section>
  )
}
