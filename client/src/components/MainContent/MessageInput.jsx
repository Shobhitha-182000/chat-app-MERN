import React from 'react';
import { BsSend } from 'react-icons/bs';

const MessageInput = () => {
  return (
    <form className='message-input'>
      <div className='input-container'>
        <input
          type='text'
          className='input-field'
          placeholder='Send a message'
        />
        <button type='submit' className='send-button'>
          <BsSend />
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
