import React from "react";
import { ChatData } from "../context/ChatContext";

const Header = () => {
  const { chats } = ChatData();
  return (
    <div>
      <p className="text-lg mb-6">Hello, How can i help you today?</p>
      {chats && chats.length === 0 && (
        <p className="text-lg mb-6">Create new chat to continue</p>
      )}
    </div>
  );
};

export default Header;


// import React from "react";
// import { ChatData } from "../context/ChatContext";

// const Header = () => {
//   const { chats }  = ChatData();
//   return (
//     <div>
//       <p className="text-lg mb-6">HELLO HOW CANs I HELP YOU</p>
//       {chats && chats.length > 1 && (
//         <p className="text-lg mb-6">Create New Chat to Continue</p>
//       )}
//     </div>
//   );
// };

// export default Header;
