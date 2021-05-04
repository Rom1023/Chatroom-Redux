import React from 'react';

import MessageList from '../containers/MessageList';
import ChannelList from '../containers/ChannelList';

const App = () => {
  return (
    <div className="app">
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
