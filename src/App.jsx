import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import { ChannelContainer, ChannelListContainer } from './components';
import './App.css'

const apiKey = '93wffnkjhc9k'

const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={ client } theme="team light">
        <ChannelContainer
          
        />
        <ChannelListContainer
        
        />
      </Chat>
    </div>
  );
}

export default App;
