'use client'
import React, { useState } from 'react';
import ChatInput from './ChatInput';
import Message from './Message';
import { Plan } from '../app/api/plan/page';
import ReactMarkdown from 'react-markdown';


const Chatbox = () => {
  const [messages, setMessages] = useState("");
  const [ref, setref] = useState("");

  /*const addMessage = (message, sender) => {
    setMessages((prevMessages) => [...prevMessages, { message, sender }]);
  };*/

  const handleSendMessage = async (query) => {
    setMessages("Loading ...")
    setref("")
    // Fetch response from the chatbot API
    const response = await fetch('/api/chat/', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const dataa = await response.json();
    console.log(dataa)
    // Assuming `Plan` is an API call that returns an answer object
    const r = await Plan(query,dataa);
    console.log(r )
    //console.log(r.Answer )
    setMessages(r.Answer)
    setref(r.RelevantLaws)
    
        
  };

  return (
    <div className="chatbox-container flex w-full flex-col p-4 bg-gray-100 rounded-md h-80">
      <div className="messages-container flex-grow overflow-y-auto mb-4">
      <ReactMarkdown>{messages}</ReactMarkdown>
       {ref}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbox;
