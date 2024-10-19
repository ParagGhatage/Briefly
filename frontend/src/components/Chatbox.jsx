'use client'
import React, { useState } from 'react';
import ChatInput from './ChatInput';
import Message from './Message';
import { Plan } from './plan/page';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';


const Chatbox = () => {
  const [messages, setMessages] = useState("");
  const [ref, setref] = useState("");

  /*const addMessage = (message, sender) => {
    setMessages((prevMessages) => [...prevMessages, { message, sender }]);
  };*/

  const handleSendMessage = async (query) => {
    setMessages("Loading ...")
    setref("")
    // Declare the `returned` variable
    let dataa;

     // Mocked chatbot response function for now
    const response = await axios.post('https://briefly-80161481785.us-central1.run.app/search',{
    
       "query":`${query}` },
      {headers:{
        'Content-Type': 'application/json',
      }},
    );
    console.log(response)
    console.log(response.data)
    if(response.data.result){
    dataa=`Query: "${query}"\n Response:${response.data.result.document}`;

    // const dataa = await returned.json();
    console.log(dataa)
    // Assuming `Plan` is an API call that returns an answer object
    const r = await Plan(query,dataa);
    console.log(r )
    //console.log(r.Answer )
    setMessages(r.Answer)
    setref(r.RelevantLaws)
    }
    else
    {
      console.log(returned.data.message)
      dataa=`You asked: "${query}"\n Response:${response.data.message}`
      // const dataa = await returned.json();
    console.log(dataa)
    // Assuming `Plan` is an API call that returns an answer object
    const r = await Plan(query,dataa);
    console.log(r )
    //console.log(r.Answer )
    setMessages(r.Answer)
    setref(r.RelevantLaws)
    }
  
  

    
        
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
