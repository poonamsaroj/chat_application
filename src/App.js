import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed';

const App = () => {
    return (
        <>
            <ChatEngine
                height="100vh"
                projectID="b98b15b5-a883-49ac-9683-a5041e6d915c"
                userName="psaroj"
                userSecret="MCRuzic$*PkXrW6"
                renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}

            />
        </>
    )
}

export default App;