// components/Message.jsx
const Message = ({ message, sender }) => {
    const isUser = sender === 'user';
    return (
      <div className={`message ${isUser ? 'text-right' : 'text-left'} mb-2`}>
        <div className={`p-2 inline-block rounded-lg ${isUser ? 'bg-blue-500 text-black' : 'bg-gray-300 text-black'}`}>
          {message}
        </div>
      </div>
    );
  };
  
  export default Message;
  