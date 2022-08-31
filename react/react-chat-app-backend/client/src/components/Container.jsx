import { useEffect } from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import { useChat } from "../context/ChatContext";

import { init, subscribeChat, subscribeInitialMesssages } from "../socketApi";

function Container() {
  const { setMessages } = useChat();

  useEffect(() => {
    init();

    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });

    subscribeInitialMesssages((messages) => {
      setMessages(messages);
    });
  }, []);

  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  );
}

export default Container;
