"use client"
import { useState } from 'react';

const ChatInput = ({ onSendMessage }) => {
  const [query, setQuery] = useState('');

  const handleSend = () => {
    if (query.trim()) {
      onSendMessage(query); // Send the message to the Chatbox component
      setQuery(''); // Clear input field after sending
    }
  };

  return (
    <div className="chat-input flex flex-col">
      <div className="flex">
        <input
          type="text"
          className="border-2 border-gray-300 p-2 flex-grow rounded-l-md"
          placeholder="Type your message..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()} // Send on Enter key press
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-r-md"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-600 text-center">
        *Briefly can make mistakes. For important legal matters, please consult a qualified attorney.
      </p>
    </div>
  );
};

export default ChatInput;
