import React from "react";

const Header = () => {
  const chat = [{ chat: "chat" }];
  return (
    <div>
      <p className="text-lg mb-6">HELLO HOW CAN I HELP YOU</p>
      {chat && chat.length === 0 && (
        <p className="text-lg mb-6">Create New Chat to Continue</p>
      )}
    </div>
  );
};

export default Header;
