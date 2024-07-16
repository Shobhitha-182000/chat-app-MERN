import React from 'react';
import './MessageContainer.css';
import Messages from './Messages';
import MessageInput from './MessageInput';

const MessageContainer = () => {
  return (
    <div className='message-container'>
      <div className='header'>
         <span className='recipient-name'>To:Raj</span>
      </div>
      <Messages />
      <MessageInput />
    </div>
  );
}

export default MessageContainer;
