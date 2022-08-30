import { createContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const values = {};

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};
