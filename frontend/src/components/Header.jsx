import React from "react";
import { ChatData } from "../context/ChatContext";

const Header = () => {
  const { chats, messages } = ChatData();

  const shouldShowGreeting =
    chats && chats.length > 0 && (!messages || messages.length === 0);

  return (
    <div>
      {shouldShowGreeting && (
        <div className="flex items-center justify-center h-[100px]">
          <p className="text-2xl font-semibold text-center text-gray-700">
            Hello, How can I help you today?
          </p>
        </div>
      )}
      {chats && chats.length === 0 && (
        <p className="flex items-center justify-center h-[100px] font-semibold text-lg mb-6">Create new chat to continue</p>
      )}
    </div>
  );
};

export default Header;
