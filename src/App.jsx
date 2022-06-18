// #region imports 
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import { MessageForm } from './MessageForm.jsx';
import { MessageList } from './MessageList.jsx';
// #endregion

const API_URL = 'http://127.0.0.1:5000/messages';

const DataLoader = ({ onData }) => {
  function loadData() {
    axios.get(API_URL)
      .then(res => {
        onData(res.data);

        loadData();
      });
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <h1 className="title">
      Chat application
    </h1>
  );
};

export function App() {
  const [messages, setMessages] = useState([]);

  function saveData(messagesFromServer) {
    setMessages(messagesFromServer);
  }

  return (
    <section className="section content">
      <DataLoader onData={saveData} />

      <MessageForm />
      <MessageList messages={messages} />
    </section>
  );
}

