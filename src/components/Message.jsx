import React from 'react';

const Message = ({ message }) => {
  return (
    <div>
      <small>{message.author}</small>
      <p>{message.content}</p>
    </div>
  );
};

export default Message;
