import React from 'react';

import MessageList from '../containers/MessageList';
import ChannelList from '../containers/ChannelList';

const App = (props) => {
  return (
    <div className="app">
      <ChannelList channelFromParam={props.match.params.channel} />
      <MessageList channelFromParam={props.match.params.channel} />
    </div>
  );
};

export default App;
