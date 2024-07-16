import React from 'react';
import Message from './Message';

const Messages = () => {
  return (
    <div className='messages'>
      {[...Array(12)].map((_, index) => (
        <Message key={index} />
      ))}
    </div>
  );
}

export default Messages;
